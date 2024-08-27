import { Checkbox, Tooltip } from "@nextui-org/react";
import { Info } from "@phosphor-icons/react/dist/ssr/Info";
import { PropsWithChildren, useMemo } from "react";

type AllianceCheckProps = {
  name: string;
};

const AllianceCheck = ({
  name,
  children,
}: PropsWithChildren<AllianceCheckProps>) => {
  const kebabedName = useMemo(
    () => name.toLowerCase().replace(" ", "-"),
    [name]
  );

  return (
    <Checkbox value={kebabedName}>
      <div className="flex flex-row gap-2 items-center">
        {name}

        <Tooltip
          closeDelay={100}
          content={
            <ul className="list-disc pl-4 [&>li]:pb-1 px-3 pt-3 pb-2">
              {children}
            </ul>
          }
          placement="right"
        >
          <Info />
        </Tooltip>
      </div>
    </Checkbox>
  );
};

export default AllianceCheck;
