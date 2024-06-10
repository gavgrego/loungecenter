import { Lounge } from "@/data/api/documentation";

type DirectionsAndMapProps = {
  loungeData: Lounge | undefined;
};

const DirectionsAndMap = ({ loungeData }: DirectionsAndMapProps) => {
  return (
    <>
      <h3>🚶Walking Directions:</h3>
      <p>{loungeData?.directions}</p>
      <div className="h-[400px] ">
        <iframe
          className="w-full h-full mt-5 rounded-lg"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=place_id:${loungeData?.googlePlaceId}`}
          title={loungeData?.name}
        />
      </div>
    </>
  );
};

export default DirectionsAndMap;
