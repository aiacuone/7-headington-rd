'use client'

import { CustomTabs } from '@/components/ui/CustomTabs'
import { ImageAndParagraphs } from '@/components/ui/ImageAndParagraphs'
import { ListItems } from '@/components/ui/ListItems'
import Image from 'next/image'

const ThermostatPage = () => {
  const tabs = [
    {
      label: 'Zones',
      content: <ZonesContent />,
    },
    {
      label: 'Locations',
      content: <LocationContent />,
    },
    {
      label: 'Battery Replacement',
      content: <BatteryReplacementContent />,
    },
  ]

  return <CustomTabs tabs={tabs} />
}

export default ThermostatPage

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

const LocationContent = () => {
  return (
    <div className="stack gap-3">
      <p>The thermostats are located in the following locations</p>
      <Image
        src={
          'https://7-headington-rd.s3.eu-west-2.amazonaws.com/other/thermostat1.jpg'
        }
        height={300}
        width={300}
        alt="Thermostat Image"
      />
      <ol className="text-left">
        <li>Main Master bedroom</li>
        <li>Secondary Master bedroom</li>
        <li>Outside the under stair storage</li>
      </ol>
    </div>
  )
}

const BatteryReplacementContent = () => {
  const keyImageAndParagraphs = [
    [
      'The thermostats are powered by <b>2x AA</b> batteries.',
      'https://7-headington-rd.s3.eu-west-2.amazonaws.com/other/thermostat1.jpg',
    ],
    [
      'To replace the batteries, lift the flap from the bottom of the unit',
      'https://7-headington-rd.s3.eu-west-2.amazonaws.com/other/thermostat2.jpg',
    ],
    [
      'Pull down the battery cover at the bottom of the unit',
      'https://7-headington-rd.s3.eu-west-2.amazonaws.com/other/thermostat4.jpg',
    ],
  ]
  return <ImageAndParagraphs items={keyImageAndParagraphs} />
}
