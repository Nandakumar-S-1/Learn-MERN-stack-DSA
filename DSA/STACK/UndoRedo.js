class UndoRedo {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }

    // Do something new
    doAction(action) {
        this.undoStack.push(action);
        this.redoStack = []; // clear redo history when new action happens
        console.log(`Action done: ${action}`);
    }

    // Undo last action
    undo() {
        if (this.undoStack.length === 0) {
            console.log("Nothing to undo");
            return;
        }
        let action = this.undoStack.pop();
        this.redoStack.push(action);
        console.log(`Undo: ${action}`);
    }

    // Redo last undone action
    redo() {
        if (this.redoStack.length === 0) {
            console.log("Nothing to redo");
            return;
        }
        let action = this.redoStack.pop();
        this.undoStack.push(action);
        console.log(`Redo: ${action}`);
    }
}

// Example use
let editor = new UndoRedo();

editor.doAction("Type 'Hello'");
editor.doAction("Type 'World'");
editor.undo();  // Undo: Type 'World'
editor.undo();  // Undo: Type 'Hello'
editor.redo();  // Redo: Type 'Hello'