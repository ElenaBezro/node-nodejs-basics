import { writeFile } from "fs/promises";
import path from "path";
import { getCurrentDirName } from "./utils.js";

const create = async () => {
  const errMessage = "FS operation failed";
  const fileContents = "I am fresh and young";
  const curDirPath = getCurrentDirName();
  const filePath = path.join(curDirPath, "files", "fresh.txt");

  try {
    await writeFile(filePath, fileContents, { flag: "wx" });
  } catch {
    throw new Error(errMessage);
  }
};

await create();
