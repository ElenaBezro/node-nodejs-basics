import { getCurrentDirName } from "./utils.js";
import { readdir, copyFile, mkdir } from "node:fs/promises";
import path from "path";

const copy = async () => {
  const errMessage = "FS operation failed";
  const sourceDirName = path.join(getCurrentDirName(), "files");
  const destinationDirName = path.join(getCurrentDirName(), "files_copy");

  try {
    await mkdir(destinationDirName, { recursive: false });
    const sourceDirContent = await readdir(sourceDirName);
    await Promise.all(sourceDirContent.map((fileToCopy) => copyFile(`${sourceDirName}/${fileToCopy}`, `${destinationDirName}/${fileToCopy}`)));
  } catch (e) {
    throw new Error(errMessage);
  }
};

copy();
