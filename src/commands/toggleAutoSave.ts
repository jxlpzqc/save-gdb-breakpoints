import vscode from 'vscode'

export function toggleAutoSave() {
    let autoSave = vscode.workspace.getConfiguration("save-gdb-breakpoints").get<boolean>("autoSave");
    vscode.workspace.getConfiguration("save-gdb-breakpoints").update("autoSave", !autoSave, vscode.ConfigurationTarget.Workspace);
    vscode.window.showInformationMessage(`Auto Save is now ${!autoSave ? "enabled" : "disabled"}`);
}