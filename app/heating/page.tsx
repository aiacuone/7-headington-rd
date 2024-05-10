import { CustomTabs } from '@/components/ui/CustomTabs'
import { ListItems } from '@/components/ui/ListItems'

const HeatingPage = () => {
  const tabs = [
    {
      label: 'Zones',
      content: <ZonesContent />,
    },
    {
      label: 'Thermostats',
      content: <ThermostatContent />,
    },
    {
      label: 'Recommendations',
      content: <RecommendationsContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default HeatingPage

const ZonesContent = () => {
  const zones = ['Downstairs', 'Upstairs', 'Underfloor heating']
  const thermostatListItems = [
    ['Downstairs', 'Outside under stair storage'],
    ['Upstairs First Half', 'Main Master'],
    ['Upstairs Second Half', 'Secondary Master'],
  ]
  return (
    <div className="stack gap-3">
      <p>
        There are 3 zones within the house, each zone is controlled by a
        thermostat
      </p>
      <p className="text-left">The 3 zones are:</p>
      <ol>
        {zones.map((zone, index) => (
          <li key={`zone ${index}`} className="text-left">
            {zone}
          </li>
        ))}
      </ol>
      <p>Each zone is controlled by the following thermostat</p>
      <ListItems
        items={thermostatListItems}
        mappingKey="thermostat"
        isKeyBold={false}
      />
    </div>
  )
}

const ThermostatContent = () => {
  return (
    <div className="stack gap-3">
      <p>The thermostats are located in the following locations</p>
      <ol className="text-left">
        <li>Main Master bedroom</li>
        <li>Secondary Master bedroom</li>
        <li>Outside the under stair storage</li>
      </ol>
      <p>
        The thermostats are powered by <b>2x AA</b> batteries.
      </p>
      <p>
        To replace the batteries, lift the flap from the bottom of the unit, and
        pull down the battery cover at the bottom of the unit
      </p>
    </div>
  )
}

const RecommendationsContent = () => {
  return (
    <div>
      <p>
        We recommend to reduce the amount of time the upstairs heating is on, a
        lot of the heat from downstairs makes its way upstairs
      </p>
    </div>
  )
}
