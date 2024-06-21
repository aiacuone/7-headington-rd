import { Paragraphs } from '@/components/Paragraphs'

const Lock = () => {
  const paragraphs = [
    'The door locking system is not generic.',
    'Pull the handle all the way up, then turn the locking mechanism anti - clockwise.If you are having issues locking the door, it may be because the handle is not all the way up',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

const Unlock = () => {
  const paragraphs = [
    'The door locking system is not generic.',
    'Rotate the locking mechanism clockwise, then push the handle down.',
    'Note, pushing the handle down from a position where the handle is all the way up will have resistance, this is normal.',
  ]

  return <Paragraphs paragraphs={paragraphs} />
}

export const doorsTabs = [
  {
    label: 'Lock',
    content: <Lock />,
  },
  {
    label: 'Unlock',
    content: <Unlock />,
  },
]
