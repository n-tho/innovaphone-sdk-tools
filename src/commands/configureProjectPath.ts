import * as vscode from "vscode";
import { SettingsService } from "../services/settingsService";

export function registerConfigureProjectPathCommand(
  context: vscode.ExtensionContext,
): void {
  const command = vscode.commands.registerCommand(
    "innovaphone.configureProjectPath",
    async () => {
      const selected = await vscode.window.showOpenDialog({
        title: vscode.l10n.t("Configure Project Path"),
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: vscode.l10n.t("Select Project folder"),
      });

      if (!selected || selected.length === 0) {
        return;
      }

      const projectPath = selected[0].fsPath;

      await SettingsService.setProjectPath(projectPath);

      vscode.window.showInformationMessage(
        vscode.l10n.t("Project path saved: {0}", projectPath),
      );
    },
  );

  context.subscriptions.push(command);
}
