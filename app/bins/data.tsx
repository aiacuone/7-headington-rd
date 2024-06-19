import { Paragraphs } from '@/components/Paragraphs'
import { KeyValuePairs } from '@/components/ui/KeyValuePairs'

const CollectionDayContent = () => {
  const binDays = [
    ['General (Green)', 'Every Friday'],
    ['Recycling (Blue)', 'Every second Friday (same as garden waste)'],
    ['Garden (Red)', 'Every second Friday (same as recycling)'],
  ]

  return (
    <div className="stack gap-3">
      <p>Refuse collection days are as follows</p>
      <KeyValuePairs keyValuePairs={binDays} mappingKey="bin" />
      <p className="">
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

const GardenWaste = () => {
  const paragraphs = [
    'Please note that there is a Garden Waste (Red) bin',
    'Please do not put garden waste in the general waste bin.',
  ]
  return <Paragraphs paragraphs={paragraphs} />
}

export const binsTabs = [
  {
    label: 'Collection Day',
    content: <CollectionDayContent />,
  },
  {
    label: 'Garden Waste',
    content: <GardenWaste />,
  },
]
