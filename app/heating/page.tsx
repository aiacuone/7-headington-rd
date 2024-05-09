import { CustomTabs } from '@/components/ui/CustomTabs'

const HeatingPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: 'Basic info .....',
    },
    {
      label: 'Batteries',
      content: <BatteriesContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default HeatingPage

const BatteriesContent = () => {
  return (
    <div>
      <p>The heating control units are powered by 2x AA batteries.</p>
      <br />
      <p>
        To replace the batteries, lift the flap from the bottom of the unit, and
        pull down the battery cover at the bottom of the unit
      </p>
    </div>
  )
}
