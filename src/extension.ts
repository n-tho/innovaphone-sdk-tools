//extension.ts
import * as vscode from "vscode";
import { registerNewJsAppCommand } from "./commands/newJsApp";
import { registerConfigureSdkPathCommand } from "./commands/configureSdkPath";
import { registerConfigureCompanyNameCommand } from "./commands/configureCompanyName";
import { registerConfigureProjectPathCommand } from "./commands/configureProjectPath";
export function activate(context: vscode.ExtensionContext): void {
  registerNewJsAppCommand(context);
  registerConfigureSdkPathCommand(context);
  registerConfigureCompanyNameCommand(context);
  registerConfigureProjectPathCommand(context);
}
export function deactivate() {}
