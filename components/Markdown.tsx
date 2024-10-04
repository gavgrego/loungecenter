"use client";

import { PropsWithChildren } from "react";
import { Remark } from "react-remark";

const Markdown = ({ children }: PropsWithChildren) => {
  return (
    <div className="[&>ul]:list-disc [&>ul]:pl-4 [&>li]:mx-6 [&>li]:my-3">
      <Remark>{`${children}`}</Remark>
    </div>
  );
};

export default Markdown;
