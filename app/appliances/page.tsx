import { ImageGrid } from '@/components/ui/ImageGrid'

const AppliancesPage = () => {
  const applianceUrl = (url: string) =>
    `https://7-headington-rd.s3.eu-west-2.amazonaws.com/appliances/${url}.jpg`

  const appliances = [
    {
      label: 'Ovens',
      imageSrc: applianceUrl('oven1'),
    },
    {
      label: 'Washing Machine',
      imageSrc: applianceUrl('washing-machine1'),
    },
  ]

  return <ImageGrid list={appliances} />
}

export default AppliancesPage
