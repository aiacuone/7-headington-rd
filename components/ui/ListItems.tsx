import { FC } from 'react'

interface ListItemsProps {
  items: string[][]
  mappingKey: string
}

export const ListItems: FC<ListItemsProps> = ({ items, mappingKey }) => {
  return (
    <ul>
      {items.map(([key, value], index) => (
        <li key={`${mappingKey} item ${index}`}>
          <div className="hstack gap-2">
            <p className="font-bold whitespace-nowrap">{key}:</p>
            <p className="text-left">{value}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
