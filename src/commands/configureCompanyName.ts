import * as vscode from "vscode";
import { SettingsService } from "../services/settingsService";

export function registerConfigureCompanyNameCommand(
  context: vscode.ExtensionContext,
): void {
  const command = vscode.commands.registerCommand(
    "innovaphone.configureCompanyName",
    async () => {
      const current = SettingsService.getCompanyName() ?? "";

      const companyName = await vscode.window.showInputBox({
        title: vscode.l10n.t("Configure Company Name"),
        prompt: vscode.l10n.t("Company/manufacturer name"),
        value: current,
        validateInput: (value) => {
          if (!value) return vscode.l10n.t("Company name is required");
          if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
            return vscode.l10n.t(
              "Only letters, numbers, underscore and dash are allowed",
            );
          }
          return null;
        },
      });

      if (!companyName) return;

      await SettingsService.setCompanyName(companyName);

      vscode.window.showInformationMessage(
        vscode.l10n.t("Company name saved: {0}", companyName),
      );
    },
  );

  context.subscriptions.push(command);
}
