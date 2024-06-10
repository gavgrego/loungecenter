"use client";

import { Remark } from "react-remark";

type NotesProps = {
  markdown: string;
};

const Notes = ({ markdown }: NotesProps) => {
  return (
    <div className="[&>ul]:list-disc [&>ul]:pl-4 [&>li]:mx-6 [&>li]:my-3">
      <Remark>{`${markdown}`}</Remark>
    </div>
  );
};

export default Notes;
