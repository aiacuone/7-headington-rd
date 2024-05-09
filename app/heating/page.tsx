import { CustomTabs } from '@/components/ui/CustomTabs'

const HeatingPage = () => {
  const tabs = [
    {
      label: 'Basics',
      content: <BasicInfoContent />,
    },
    {
      label: 'Thermostats',
      content: <BatteriesContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default HeatingPage

const BasicInfoContent = () => {
  return (
    <div>
      <p>The house is heated by radiators</p>
    </div>
  )
}

const BatteriesContent = () => {
  return (
    <div>
      <div className="center stack">
        <p className="text-left">
          The thermostats are located in the following locations
        </p>
        <ol className="text-left">
          <li>Main Master bedroom</li>
          <li>Secondary Master bedroom</li>
          <li>Outside the under stair storage</li>
        </ol>
      </div>
      <br />
      <p>The thermostats are powered by 2x AA batteries.</p>
      <br />
      <p>
        To replace the batteries, lift the flap from the bottom of the unit, and
        pull down the battery cover at the bottom of the unit
      </p>
    </div>
  )
}
