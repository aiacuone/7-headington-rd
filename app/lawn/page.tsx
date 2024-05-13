import { CustomTabs } from '@/components/ui/CustomTabs'
import Image from 'next/image'

const LawnPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: <BasicsContent />,
    },
    {
      label: 'Recommendations',
      content: <RecommendationsContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default LawnPage

const BasicsContent = () => {
  return (
    <div className="stack gap-6 center">
      <p>We have supplied a battery powered mower and trimmer</p>
      <Image
        src="https://7-headington-rd.s3.eu-west-2.amazonaws.com/outdoor-equipment/mower2.jpg"
        alt="Mower Image"
        height={300}
        width={300}
      />
      <p>
        The reason for not supplying a petrol powered mower is to ensure that
        the neighbours are not disturbed by the noise and fumes
      </p>
    </div>
  )
}

const RecommendationsContent = () => {
  return (
    <div>
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
