type HoursProps = {
  open: boolean;
};

const Hours = ({ open }: HoursProps) => {
  return (
    <div>
      {open ? (
        <div className="flex flex-row gap-3 items-center">
          <div className="w-3 h-3 bg-green-600 rounded-full" />
          Open Now!
        </div>
      ) : (
        <div className="flex flex-row gap-3 items-center">
          <div className="w-3 h-3 bg-red-600 rounded-full" />
          <div>Currently Closed</div>
        </div>
      )}
    </div>
  );
};

export default Hours;
