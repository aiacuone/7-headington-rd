import { FC, ReactNode } from 'react'

export type KeyValuePair = (string | ReactNode)[]

interface KeyValuePairsProps {
  keyValuePairs: KeyValuePair[]
  mappingKey: string
  isKeyBold?: boolean
}

export const KeyValuePairs: FC<KeyValuePairsProps> = ({
  keyValuePairs,
  mappingKey,
  isKeyBold = true,
}) => {
  return (
    <ul>
      {keyValuePairs.map(([key, value], index) => {
        const isValueAString = typeof value === 'string'

        return (
          <li key={`${mappingKey} item ${index}`}>
            <div className="hstack gap-2 items-center">
              <p
                className={`${isKeyBold ? 'font-bold' : ''} whitespace-nowrap`}>
                {key}
              </p>
              {isValueAString ? <p className="text-left">{value}</p> : value}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
