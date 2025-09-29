import { AlertTriangle } from "lucide-react";

export function NotebookError({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6 shadow">
        <AlertTriangle className="w-8 h-8 text-destructive" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center text-destructive">
        Something went wrong
      </h2>
      <p className="text-sm text-muted-foreground mb-2 text-center">
        {message || "We couldn't fetch your notebooks. Please try again later."}
      </p>
    </div>
  );
}
