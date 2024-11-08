import { Chip } from "@nextui-org/react";
import { Broadcast } from "@phosphor-icons/react/dist/ssr";

type CustomTooltipProps = {
  active?: boolean;
  payload?: { payload: { average: number; live: number } }[];
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const busyness = () => {
      if (payload[0].payload.average == payload[0].payload.live) {
        return (
          <p className="font-semibold text-sm">
            This lounge is around its normal busyness level right now.
          </p>
        );
      }
      if (payload[0].payload.average > payload[0].payload.live) {
        return (
          <p className="font-semibold text-sm">
            This lounge is less busy than normal right now.
          </p>
        );
      } else {
        return (
          <p className="font-semibold text-sm">
            This lounge is more busy than normal right now.
          </p>
        );
      }
    };

    return (
      <div className="custom-tooltip max-w-[250px] dark:bg-black dark:text-white p-2 rounded light light:bg-white light:text-black">
        {payload[0].payload.live > 0 && (
          <div className="flex flex-col gap-2 mt-4 mb-4">
            <Chip
              className="animate-bounce"
              color="danger"
              startContent={<Broadcast size={18} />}
            >
              LIVE!
            </Chip>
            <p className="label">{`This lounge is currently ${payload[0].payload.live}/100 in busyness at around ${label} local time.`}</p>
            {busyness()}
          </div>
        )}
        <p className="label text-sm">{`⏱️ This lounge is typically an estimated ${payload[0].payload.average}/100 busyness at around ${label} local time.`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
