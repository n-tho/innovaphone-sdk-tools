//extension.ts
import * as vscode from "vscode";
import { registerNewJsAppCommand } from "./commands/newJsApp";
import { registerConfigureSdkPathCommand } from "./commands/configureSdkPath";

export function activate(context: vscode.ExtensionContext): void {
  registerNewJsAppCommand(context);
  registerConfigureSdkPathCommand(context);
}
export function deactivate() {}
