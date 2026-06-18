import * as vscode from "vscode";

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

      vscode.window.showInformationMessage(
        vscode.l10n.t("New innovaphone JS app: {0}", appName),
      );
    },
  );

  context.subscriptions.push(command);
}
