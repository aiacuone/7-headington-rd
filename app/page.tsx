import { CustomTabs } from '@/components/ui/CustomTabs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  const tabs = [{ label: 'Welcome', content: <WelcomeContent /> }]

  return <CustomTabs tabs={tabs} />
}

const WelcomeContent = () => {
  return (
    <div>
      <p className="text-xl">Welcome to 7 Headington Rd</p>
      <br />
      <p>
        We aim to to make the process of both moving in, and your stay here as
        care free as possible
      </p>
      <br />
      <p>
        This site is designed to provide you with us much information as you
        need to know about the property
      </p>
      <br />
      <p>
        Please click on the burger button at the bottom of the application to
        get started
      </p>
    </div>
  )
}
