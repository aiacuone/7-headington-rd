import { CustomTabs } from '@/components/ui/CustomTabs'
import { appIssuesTabs } from './data'

const ApplicationPage = () => {
  return <CustomTabs tabs={appIssuesTabs} />
}

export default ApplicationPage
