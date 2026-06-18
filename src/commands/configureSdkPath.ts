import * as vscode from "vscode";
import { SettingsService } from "../services/settingsService";

export function registerConfigureSdkPathCommand(
  context: vscode.ExtensionContext,
): void {
  const command = vscode.commands.registerCommand(
    "innovaphone.configureSdkPath",
    async () => {
      const selected = await vscode.window.showOpenDialog({
        title: vscode.l10n.t("Configure SDK Path"),
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: vscode.l10n.t("Select SDK folder"),
      });

      if (!selected || selected.length === 0) {
        return;
      }

      const sdkPath = selected[0].fsPath;

      await SettingsService.setSdkPath(sdkPath);

      vscode.window.showInformationMessage(
        vscode.l10n.t("SDK path saved: {0}", sdkPath),
      );
    },
  );

  context.subscriptions.push(command);
}
