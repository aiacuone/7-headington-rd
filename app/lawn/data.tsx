import Image from 'next/image'

const BasicsContent = () => {
  return (
    <div className="stack gap-6 center text-center">
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
    <div className="text-center center stack gap-6">
      <p>
        We recommend to mow the lawn every 2-4 weeks at the <i>highest</i> level
        depending on the time of year, this will mean that the lawn will be
        maintained at a height the mower can easily cut.
      </p>
      <Image
        src={
          'https://7-headington-rd.s3.eu-west-2.amazonaws.com/other/lawn.jpg'
        }
        width={500}
        height={500}
        alt="Lawn Image"
        className="rounded"
      />
    </div>
  )
}

export const lawnTabs = [
  {
    label: 'Basics',
    content: <BasicsContent />,
  },
  {
    label: 'Recommendations',
    content: <RecommendationsContent />,
  },
]
