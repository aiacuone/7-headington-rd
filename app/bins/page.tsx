import { CustomTabs } from '@/components/ui/CustomTabs'

const BinsPage = () => {
  const tabs = [
    {
      label: 'Collection Day',
      content: <CollectionDayContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default BinsPage

const CollectionDayContent = () => {
  return (
    <div>
      <p>Refuse collection is every Friday</p>
      <br />
      <p>
        Recycling is collected every{' '}
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
