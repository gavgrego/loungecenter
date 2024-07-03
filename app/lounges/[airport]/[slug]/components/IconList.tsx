import { Image } from "@nextui-org/react";

import {
  AirportLoungesDataItemAttributesAmenitiesDataItem,
  AirportLoungesDataItemAttributesDetrimentsDataItem,
  LoungeAmenitiesDataItem,
  LoungeDetrimentsDataItem,
} from "@/data/api/documentation";

type AmenitiesProps = {
  items: LoungeAmenitiesDataItem[] | LoungeDetrimentsDataItem[];
};

const IconList = ({ items }: AmenitiesProps) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {items.map(
        (
          item:
            | AirportLoungesDataItemAttributesAmenitiesDataItem
            | AirportLoungesDataItemAttributesDetrimentsDataItem
        ) => {
          return (
            <div key={item.id} className="flex flex-row gap-2 items-center">
              <h4>{item.attributes?.name}</h4>
              <Image src={item.attributes?.icon?.data?.attributes?.url} />
            </div>
          );
        }
      )}
    </div>
  );
};

export default IconList;
