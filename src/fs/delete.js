import { getCurrentDirName } from "./utils.js";
import { unlink } from "node:fs/promises";
import path from "path";

const fileToRemovePath = path.join(getCurrentDirName(), "files", "fileToRemove.txt");

const remove = async () => {
  const errMessage = "FS operation failed";

  try {
    await unlink(fileToRemovePath);
  } catch (e) {
    throw new Error(errMessage);
  }
};

await remove();
