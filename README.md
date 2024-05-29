# Save Gdb Breakpoints 

In some situations, vscode debugger does not always work when using some gdb features vscode not supports.
And when using gdb, you may be annoyed by setting breakpoints again and again.
It is painful to edit line number in your breakpoints file
espacially when you have many breakpoints, and edit file frequently,

So this plugin is to auto save gdb breakpoints to a file, when setting a breakpoint in vscode, 
adding or deleting lines which affecting line number of breakpoints.


## Commands

- `Save Gdb Breakpoints: Save`: Save gdb breakpoints to a file
- `Save Gdb Breakpoints: Toggle Auto Save`: Toggle whether automatically save gdb breakpoints to a file, default is false

## Settings

- `save-gdb-breakpoints.autoSave`
- `save-gdb-breakpoints.savePath`: The path to save breakpoints file, default is `.vscode/gdb.breakpoints`, `${workspaceFolder}` is supported.