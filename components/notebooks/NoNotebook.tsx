import { Notebook } from "lucide-react";
import CreateNotebookButton from "./CreateNotebookButton";

export function NoNotebooks() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 shadow">
        <Notebook className="w-8 h-8 text-muted-foreground" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center text-muted-foreground">
        No notebooks found
      </h2>
      <p className="text-sm text-muted-foreground mb-6 text-center">
        You don`t have any notebooks yet. Start by creating your first notebook!
      </p>
      <CreateNotebookButton />
    </div>
  );
}
