import { getCurrentDirName } from "./utils.js";
import { rename as giveNewName } from "node:fs/promises";
import path from "path";

const wrongFileNamePath = path.join(getCurrentDirName(), "files", "wrongFilename.txt");
const properFileNamePath = path.join(getCurrentDirName(), "files", "properFilename.md");

const rename = async () => {
  const errMessage = "FS operation failed";

  try {
    await giveNewName(wrongFileNamePath, properFileNamePath);
  } catch (e) {
    throw new Error(errMessage);
  }
};

await rename();
