// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { saveBreakPoint } from './commands/save';
import { toggleAutoSave } from './commands/toggleAutoSave';


const autoSave = () => {
	let autoSave = vscode.workspace.getConfiguration("save-gdb-breakpoints").get<boolean>("autoSave");
	if (autoSave) vscode.commands.executeCommand('save-gdb-breakpoints.save');
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('save-gdb-breakpoints.save', saveBreakPoint)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('save-gdb-breakpoints.toggleAutoSave', toggleAutoSave)
	);
	context.subscriptions.push(
		vscode.debug.onDidChangeBreakpoints(autoSave)
	);

}

// This method is called when your extension is deactivated
export function deactivate() { }