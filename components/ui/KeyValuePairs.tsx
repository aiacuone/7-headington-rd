import { FC } from 'react'

interface KeyValuePairsProps {
  items: string[][]
  mappingKey: string
  isKeyBold?: boolean
}

export const KeyValuePairs: FC<KeyValuePairsProps> = ({
  items,
  mappingKey,
  isKeyBold = true,
}) => {
  return (
    <ul>
      {items.map(([key, value], index) => (
        <li key={`${mappingKey} item ${index}`}>
          <div className="hstack gap-2">
            <p className={`${isKeyBold ? 'font-bold' : ''} whitespace-nowrap`}>
              {key}
            </p>
            <p className="text-left">{value}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
