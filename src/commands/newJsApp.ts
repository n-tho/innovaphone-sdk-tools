import * as vscode from "vscode";
import { ProjectService } from "../services/projectService";

export function registerNewJsAppCommand(
  context: vscode.ExtensionContext,
): void {
  const command = vscode.commands.registerCommand(
    "innovaphone.newJsApp",
    async () => {
      const appName = await vscode.window.showInputBox({
        prompt: vscode.l10n.t("Name of the innovaphone JS app"),
      });

      if (!appName) {
        return;
      }

      const folder = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        title: vscode.l10n.t("Select project location"),
      });

      if (!folder?.length) {
        return;
      }

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
