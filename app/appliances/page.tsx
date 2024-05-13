import { CardGrid } from '@/components/ui/CardGrid'
import { HouseItem } from '@/lib/types'
import { getMappedHouseItems } from '@/lib/utils'

const AppliancesPage = () => {
  const applianceItems: HouseItem[] = [
    {
      label: 'Ovens',
      imageSources: ['oven1', 'oven2'],
    },
    {
      label: 'Washing Machine',
      imageSources: ['washing-machine1'],
    },
    // {
    //   label: 'Microwave',
    //   imageSources: ['microwave1'],
    //   brand: 'Paransonic',
    //   model: 'NN-CT56JB',
    // },
    // {
    //   label: 'Kettle',
    //   imageSources: ['kettle1'],
    //   brand: 'Russell Hobbs',
    //   model: '20071',
    // },
    // {
    //   label: 'Toaster',
    //   imageSources: ['toaster1'],
    //   brand: 'Russell Hobbs',
    //   model: '24080',
    // },
    // {
    //   label: 'Coffee Grinder',
    //   imageSources: ['coffee-grinder1'],
    //   brand: 'Cuisinart',
    //   model: 'SG21U',
    // },
    // {
    //   label: 'TV',
    //   imageSources: ['tv1'],
    //   brand: 'Panasonic',
    //   model: '49UJ634V',
    // },
  ]

  const mappedApplianceItems = getMappedHouseItems(applianceItems, 'appliances')

  return <CardGrid list={mappedApplianceItems} />
}

export default AppliancesPage
