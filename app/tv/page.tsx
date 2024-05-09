import { CustomTabs } from '@/components/ui/CustomTabs'

const TvPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content:
        'We have not supplied a TV license. If you require a TV license, please contact us here....',
    },
    {
      label: 'Recommendations',
      content: <RecommendationsContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default TvPage

const RecommendationsContent = () => {
  return (
    <div>
      <p>The TV should be connected to the wifi.</p>
      <br />
      <p>
        It works well with chromecast, which can be used to stream Netflix and
        Youtube
      </p>
    </div>
  )
}
