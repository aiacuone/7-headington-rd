import { Paragraphs } from '@/components/Paragraphs'
import { KeyValuePairs } from '@/components/ui/KeyValuePairs'

const ZonesContent = () => {
  const zones = [
    'Downstairs',
    'Upstairs East (Master Side)',
    'Upstairs West (Small Master Side)',
  ]
  const thermostatKeyValuePairs = [
    ['Downstairs', 'Outside under stair storage'],
    ['Upstairs East', 'Master Room'],
    ['Upstairs West', 'Small Master Room'],
  ]

  return (
    <div className="stack gap-3">
      <p>
        There are 3 Thermostats that control the heating in the following zones
      </p>
      <ol>
        {zones.map((zone, index) => (
          <li key={`zone ${index}`} className="text-left">
            {zone}
          </li>
        ))}
      </ol>
      <p>Each zone is controlled by the following thermostat</p>
      <KeyValuePairs
        keyValuePairs={thermostatKeyValuePairs}
        mappingKey="thermostat"
      />
    </div>
  )
}

const ManualContent = () => {
  return (
    <div>
      <p>
        The Thermostat manual can be found{' '}
        <a
          href="https://www.free-instruction-manuals.com/pdf/pa_2431884.pdf"
          target="_blank">
          here
        </a>
      </p>
    </div>
  )
}

const DetailsContent = () => {
  const details = [
    ['Brand', 'Honeywell'],
    ['Model', 'T6'],
    ['Power', '2x AA Batteries'],
  ]

  return <KeyValuePairs keyValuePairs={details} mappingKey="thermostat" />
}

const Battery = () => {
  const paragraphs = [
    'The thermostats are powered by 2x AA batteries',
    'To replace the batteries, lift the flap from the bottom of the unit then pull down the battery cover at the bottom of the unit.',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const thermostatTabs = [
  {
    label: 'Details',
    content: <DetailsContent />,
  },
  {
    label: 'Zones',
    content: <ZonesContent />,
  },
  {
    label: 'Battery',
    content: <Battery />,
  },
  {
    label: 'Manual',
    content: <ManualContent />,
  },
]
