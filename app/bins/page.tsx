import { CustomTabs } from '@/components/ui/CustomTabs'

const BinsPage = () => {
  const tabs = [
    { label: 'When', content: 'The Bins are emptied every Friday' },
    {
      label: 'Recycling',
      content: <RecyclingContent />,
    },
    {
      label: 'Calendar',
      content: <CalendarContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default BinsPage

const RecyclingContent = () => {
  return (
    <div>
      <p>
        The recycling is emptied every{' '}
        <b>
          <i>second</i>
        </b>{' '}
        Friday
      </p>
      <br />
      <p>
        Refer to the{' '}
        <a
          href="https://www.dartford.gov.uk/downloads/file/2184/recycling-week-1-calendar"
          target="_blank">
          calendar
        </a>{' '}
        calendar to know which Friday
      </p>
    </div>
  )
}

const CalendarContent = () => {
  return (
    <div>
      <p>
        The calendar can be found in{' '}
        <a
          href="https://www.dartford.gov.uk/downloads/file/2184/recycling-week-1-calendar"
          target="_blank">
          here
        </a>
      </p>
    </div>
  )
}
