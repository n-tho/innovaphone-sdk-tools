//settingsService.ts
import * as vscode from "vscode";

export class SettingsService {
  private static readonly SECTION = "innovaphone";

  public static async setSdkPath(path: string): Promise<void> {
    const config = vscode.workspace.getConfiguration(this.SECTION);

    await config.update("sdkPath", path, vscode.ConfigurationTarget.Global);
  }

  public static getSdkPath(): string | undefined {
    const config = vscode.workspace.getConfiguration(this.SECTION);

    return config.get<string>("sdkPath");
  }

  public static async setCompanyName(companyName: string): Promise<void> {
    const config = vscode.workspace.getConfiguration(this.SECTION);
    await config.update(
      "companyName",
      companyName,
      vscode.ConfigurationTarget.Global,
    );
  }

  public static getCompanyName(): string | undefined {
    const config = vscode.workspace.getConfiguration(this.SECTION);
    return config.get<string>("companyName");
  }

  public static async setProjectPath(path: string): Promise<void> {
    const config = vscode.workspace.getConfiguration(this.SECTION);
    await config.update("projectPath", path, vscode.ConfigurationTarget.Global);
  }

  public static getProjectPath(): string | undefined {
    const config = vscode.workspace.getConfiguration(this.SECTION);
    return config.get<string>("projectPath");
  }
}
