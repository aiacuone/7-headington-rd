const CollectionDayContent = () => {
  const binDays = [
    ['General', 'Every Friday'],
    ['Recycling', 'Every second Friday (same as garden waste)'],
    ['Garden', 'Every second Friday (same as recycling)'],
  ]

  return (
    <div className="stack gap-1">
      <p>Refuse collection days are as follows</p>
      {binDays.map((binDay, index) => (
        <p key={`bin day ${index}`}>
          <b>{binDay[0]}:</b> {binDay[1]}
        </p>
      ))}
      <p className="pt-8">
        Refer to this{' '}
        <a
          href="https://www.dartford.gov.uk/downloads/file/2184/recycling-week-1-calendar"
          target="_blank">
          calendar
        </a>{' '}
        for all collection days
      </p>
    </div>
  )
}

export const BinColors = () => {
  const mappingData = [
    ['Green', 'General waste'],
    ['Dark Blue', 'Recycling'],
    ['Maroon', 'Garden waste'],
  ]

  return (
    <div className="stack gap-1">
      <p>There are 3 types of bins:</p>
      <ul className="stack">
        {mappingData.map((data, index) => (
          <li key={`bin ${index}`} className="hstack gap-3">
            <p className="font-bold">{data[0]}:</p>
            <p>{data[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const binsTabs = [
  {
    label: 'Collection Day',
    content: <CollectionDayContent />,
  },
  {
    label: 'Colours',
    content: <BinColors />,
  },
  {
    label: 'Garden Waste',
    content:
      'Please note that there is a garden waste bin. Please do not put garden waste in the general waste bin.',
  },
]
