import { Paragraphs } from '@/components/Paragraphs'
import { CustomTabs } from '@/components/ui/CustomTabs'

export default function Home() {
  const tabs = [{ label: 'Welcome', content: <WelcomeContent /> }]

  return <CustomTabs tabs={tabs} />
}

const WelcomeContent = () => {
  const paragraphs = [
    'Welcome to 7 Headington Rd',
    'We aim to to make the process of both moving in, and your stay here as care free as possible',
    'This site is designed to provide you with us much information as you need to know about the property',
    'Please click on the button at the bottom of the application to get started',
  ]

  return (
    <div className="stack gap-3">
      <Paragraphs paragraphs={paragraphs} hasHeader />
    </div>
  )
}
