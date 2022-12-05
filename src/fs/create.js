import { writeFile, access } from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const getDirName = () => {
  const __filename = fileURLToPath(import.meta.url);
  return dirname(__filename);
};

const create = async () => {
  const errMessage = "FS operation failed";
  const fileContents = "I am fresh and young";
  const curDirPath = getDirName();
  const filePath = path.join(curDirPath, "files", "fresh.txt");

  try {
    await writeFile(filePath, fileContents, { flag: "wx" });
  } catch {
    throw new Error(errMessage);
  }
};

await create();
