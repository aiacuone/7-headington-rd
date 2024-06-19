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
              <p>
                {isKeyBold ? <b>{key}</b> : key}
                {isValueAString && ` ${value}`}
              </p>
              {!isValueAString && value}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
