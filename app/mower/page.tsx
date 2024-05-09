import { CustomTabs } from '@/components/ui/CustomTabs'

const MowerPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: <BasicsContent />,
    },
    {
      label: 'Recommendations',
      content: <RecommendationsContent />,
    },
    {
      label: 'Batteries',
      content:
        'There are 2 batteries that are supplied with the mower. They over an hour to charge each',
    },
    {
      label: 'Trimmer',
      content: 'The trimmer runs on the same batteries as the mower',
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default MowerPage

const BasicsContent = () => {
  return (
    <div className="text-center">
      <p>We have supplied a battery powered mower and trimmer</p>
      <br />
      <p>
        The reason for not supplying a petrol powered mower is to ensure that
        the neighbours are not disturbed by the noise and fumes
      </p>
    </div>
  )
}

const RecommendationsContent = () => {
  return (
    <div className="text-center">
      <p>
        We recommend to mow the lawn every 2-4 weeks depending on the time of
        year, this will mean that the lawn will be maintained at a height the
        mower can easily cut.
      </p>
      <br />
      <p>
        At higher lengths, the mower can struggle on higher lawns, meaning it
        may turn off whilst mowing, and it can take up to 3-4 batteries to mow
        the lawn
      </p>
    </div>
  )
}
