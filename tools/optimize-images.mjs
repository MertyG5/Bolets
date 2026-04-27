import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const inputDir = path.join(projectRoot, "public", "img");
const outputDir = inputDir;
const manifestPath = path.join(projectRoot, "public", "img", "image-manifest.json");

const targetWidths = [320, 480, 768, 1024, 1280];

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const toPosix = (filePath) => filePath.replaceAll("\\", "/");

const main = async () => {
  await ensureDir(outputDir);

  const files = await fs.readdir(inputDir);
  const jpgFiles = files.filter((name) => /\.(jpe?g)$/i.test(name));

  const manifest = {};

  for (const file of jpgFiles) {
    const inputPath = path.join(inputDir, file);
    const parsed = path.parse(file);
    const baseName = parsed.name;

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      continue;
    }

    const validWidths = targetWidths.filter((w) => w <= metadata.width);
    if (!validWidths.includes(metadata.width)) {
      validWidths.push(metadata.width);
    }

    const widthSet = Array.from(new Set(validWidths)).sort((a, b) => a - b);

    const entries = {
      jpg: [],
      webp: [],
      avif: []
    };

    for (const width of widthSet) {
      const resized = sharp(inputPath).resize({ width, withoutEnlargement: true });

      const jpgName = `${baseName}-${width}.jpg`;
      const webpName = `${baseName}-${width}.webp`;
      const avifName = `${baseName}-${width}.avif`;

      await resized
        .clone()
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(path.join(outputDir, jpgName));

      await resized
        .clone()
        .webp({ quality: 78 })
        .toFile(path.join(outputDir, webpName));

      await resized
        .clone()
        .avif({ quality: 50, effort: 4 })
        .toFile(path.join(outputDir, avifName));

      entries.jpg.push({ width, src: toPosix(path.join("img", jpgName)) });
      entries.webp.push({ width, src: toPosix(path.join("img", webpName)) });
      entries.avif.push({ width, src: toPosix(path.join("img", avifName)) });
    }

    manifest[toPosix(path.join("img", file))] = {
      width: metadata.width,
      height: metadata.height,
      variants: entries
    };
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Optimized ${Object.keys(manifest).length} images.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
