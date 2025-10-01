import RichTextEditor from "@/components/rich-text-editor";
import { getNoteById } from "@/server/note";
import React from "react";
import { JSONContent } from "@tiptap/react";
import { PageWrapper } from "@/components/page-wrapper";

type Params = Promise<{ noteId: string }>;

interface NotePageProps {
  params: Params;
}

export default async function NotePage({ params }: NotePageProps) {
  const { noteId } = await params;

  const { note } = await getNoteById(noteId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: note?.notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${note?.notebook?.id}`,
        },
        { label: note?.title ?? "Note", href: `/dashboard/note/${noteId}` },
      ]}
    >
      <h2 className="text-2xl font-bold text-center uppercase ">
        {note?.title}
      </h2>
      <hr />
      <RichTextEditor
        content={note?.content as JSONContent[]}
        noteId={noteId}
      />
    </PageWrapper>
  );
}
