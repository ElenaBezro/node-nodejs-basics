import { readdir } from "node:fs/promises";
import { getCurrentDirName } from "./utils.js";
import path from "path";

const list = async () => {
  const errMessage = "FS operation failed";

  try {
    const folderToListPath = path.join(getCurrentDirName(), "files");
    const fileNames = await readdir(folderToListPath);
    for (let fileName of fileNames) {
      console.log(fileName);
    }
  } catch {
    throw new Error(errMessage);
  }
};

await list();
