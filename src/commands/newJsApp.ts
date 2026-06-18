import * as vscode from "vscode";
import { ProjectService } from "../services/projectService";
import { SettingsService } from "../services/settingsService";

export function registerNewJsAppCommand(
  context: vscode.ExtensionContext,
): void {
  const command = vscode.commands.registerCommand(
    "innovaphone.newJsApp",
    async () => {
      const sdkPath = SettingsService.getSdkPath();
      const companyName = SettingsService.getCompanyName();

      if (!sdkPath) {
        const action = await vscode.window.showErrorMessage(
          vscode.l10n.t("Please configure the SDK path first."),
          vscode.l10n.t("configure"),
        );
        if (action) {
          await vscode.commands.executeCommand("innovaphone.configureSdkPath");
        }
        return;
      }

      if (!companyName) {
        const action = await vscode.window.showErrorMessage(
          vscode.l10n.t("Please configure the company name first."),
          vscode.l10n.t("Configure"),
        );

        if (action) {
          await vscode.commands.executeCommand(
            "innovaphone.configureCompanyName",
          );
        }
        return;
      }

      const appName = await vscode.window.showInputBox({
        prompt: vscode.l10n.t("Name of the innovaphone JS app"),
      });

      if (!appName) return;

      const folder = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        title: vscode.l10n.t("Select project location"),
      });

      if (!folder?.length) return;

      const projectPath = await ProjectService.createProject(
        folder[0].fsPath,
        appName,
      );

      vscode.window.showInformationMessage(
        vscode.l10n.t("Project created: {0}", projectPath),
      );
    },
  );

  context.subscriptions.push(command);
}
