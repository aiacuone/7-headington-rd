import { FC, ReactNode } from 'react'

interface ListItemsProps {
  list: (string | ReactNode)[]
  listType?: 'ul' | 'ol'
}

export const ListItems: FC<ListItemsProps> = ({ list, listType = 'ol' }) => {
  if (listType === 'ol') {
    return (
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    )
  }

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
