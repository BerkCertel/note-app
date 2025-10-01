// import { CreateNoteButton } from "@/components/create-note-button";
import { CreateNoteButton } from "@/components/create-note-button";
import NoteCard from "@/components/notebooks/NoteCard";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebooks";

type Params = Promise<{
  notebookId: string;
}>;

export default async function NotebookPage({ params }: { params: Params }) {
  const { notebookId } = await params;

  const { notebook } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${notebookId}`,
        },
      ]}
    >
      <h2 className="text-2xl font-bold text-center uppercase ">
        {notebook?.name}
      </h2>
      <hr />

      <CreateNoteButton notebookId={notebookId} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notebook?.notes?.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </PageWrapper>
  );
}
