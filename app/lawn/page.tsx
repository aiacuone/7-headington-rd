import { CustomTabs } from '@/components/ui/CustomTabs'
import { ListItems } from '@/components/ui/ListItems'

const LawnPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: <BasicsContent />,
    },
    {
      label: 'Mower',
      content: <MowerContent />,
    },
    {
      label: 'Trimmer',
      content: <TimmerContent />,
    },
    {
      label: 'Batteries',
      content: <BatteriesContent />,
    },
    {
      label: 'Recommendations',
      content: <RecommendationsContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default LawnPage

const BatteriesContent = () => {
  const listItems = [
    ['Amount', '2'],
    ['Voltage', '40V'],
  ]
  return <ListItems items={listItems} mappingKey="battery" />
}

const TimmerContent = () => {
  const listItems = [
    ['Brand', 'Greenworks'],
    ['Model', 'G40LT'],
  ]
  return <ListItems items={listItems} mappingKey="trimmer" />
}

const MowerContent = () => {
  const listItems = [
    ['Brand', 'Greenworks'],
    ['Model', 'G40LM41K2X'],
    ['Voltage', '40V'],
    ['Cutting', 'Mulching, Rear Discharge, Rear Collection'],
  ]
  return <ListItems items={listItems} mappingKey="mower" />
}

const BasicsContent = () => {
  return (
    <div>
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
