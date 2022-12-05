import { dirname } from "path";
import { fileURLToPath } from "url";

export const getCurrentDirName = () => {
  const __filename = fileURLToPath(import.meta.url);
  return dirname(__filename);
};
