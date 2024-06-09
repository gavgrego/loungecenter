"use client";

import { Remark } from "react-remark";

type NotesProps = {
  markdown: string;
};

const Notes = ({ markdown }: NotesProps) => {
  return <Remark>{`${markdown}`}</Remark>;
};

export default Notes;
