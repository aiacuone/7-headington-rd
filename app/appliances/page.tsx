import { ImageGrid } from '@/components/ui/ImageGrid'
import { HouseItem } from '@/lib/types'

const AppliancesPage = () => {
  const applianceUrl = (url: string) =>
    `https://7-headington-rd.s3.eu-west-2.amazonaws.com/appliances/${url}.jpg`

  const appliances: HouseItem[] = [
    {
      label: 'Ovens',
      imageSrc: applianceUrl('oven1'),
    },
    {
      label: 'Washing Machine',
      imageSrc: applianceUrl('washing-machine1'),
    },
    {
      label: 'Microwave',
      imageSrc: applianceUrl('microwave1'),
      brand: 'Paransonic',
      model: 'NN-CT56JB',
    },
    {
      label: 'Kettle',
      imageSrc: applianceUrl('kettle1'),
      brand: 'Russell Hobbs',
      model: '20071',
    },
    {
      label: 'Toaster',
      imageSrc: applianceUrl('toaster1'),
      brand: 'Russell Hobbs',
      model: '24080',
    },
    {
      label: 'Coffee Grinder',
      imageSrc: applianceUrl('coffee-grinder1'),
      brand: 'Cuisinart',
      model: 'SG21U',
    },
    {
      label: 'Mower',
      imageSrc: applianceUrl('mower1'),
      brand: 'Greenworks',
      model: 'G40LM41',
    },
    {
      label: 'Grass Trimmer',
      imageSrc: applianceUrl('grass-trimmer1'),
      brand: 'Greenworks',
      model: 'G40LT',
    },
    {
      label: 'TV',
      imageSrc: applianceUrl('tv1'),
      brand: 'Panasonic',
      model: '49UJ634V',
    },
  ]

  return <ImageGrid list={appliances} />
}

export default AppliancesPage
