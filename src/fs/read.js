import { getCurrentDirName } from "./utils.js";
import { readFile } from "node:fs/promises";
import path from "path";

const read = async () => {
  const errMessage = "FS operation failed";
  const fileToReadPath = path.join(getCurrentDirName(), "files", "fileToRead.txt");

  try {
    const fileContent = await readFile(fileToReadPath, "utf8");
    console.log(fileContent);
  } catch {
    throw new Error(errMessage);
  }
};

await read();
