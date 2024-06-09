type HoursProps = {
  open: boolean
}

const Hours = ({ open }: HoursProps) => {
  return (
    <div>
      {open ? (
        <div>Open Now!</div>
      ) : (
        <div>Currently Closed</div>
      )}
    </div>
  )

}

export default Hours