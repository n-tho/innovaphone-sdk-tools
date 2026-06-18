import * as fs from "fs";
import * as path from "path";

export class ProjectService {
  public static async createProject(
    parentFolder: string,
    projectName: string,
  ): Promise<string> {
    const projectFolder = path.join(parentFolder, projectName);

    await fs.promises.mkdir(projectFolder, { recursive: true });
    await fs.promises.mkdir(path.join(projectFolder, "src"), {
      recursive: true,
    });
    await fs.promises.mkdir(path.join(projectFolder, "web"), {
      recursive: true,
    });
    await fs.promises.mkdir(path.join(projectFolder, ".vscode"), {
      recursive: true,
    });

    return projectFolder;
  }
}
