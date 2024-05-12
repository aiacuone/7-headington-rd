import { ImageGrid } from '@/components/ui/ImageGrid'
import { HouseItem } from '@/lib/types'
import { getMappedHouseItems } from '@/lib/utils'

const OutdoorEquipmentPage = () => {
  const outdoorEquipmentItems: HouseItem[] = [
    {
      label: 'Mower',
      imageSources: ['mower1'],
      brand: 'Greenworks',
      model: 'G40LM41',
      href: 'https://www.amazon.co.uk/gp/product/B06WW7CLX3/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
    },
    {
      label: 'Trimmer',
      imageSources: ['trimmer1'],
      brand: 'Greenworks',
      model: 'G40LT',
      href: 'https://www.amazon.co.uk/gp/product/B06WW7DPQ3/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
    },
    {
      label: 'Ladder',
      imageSources: ['ladder1'],
      brand: 'Werner',
      height: '6 Foot',
      href: 'https://www.amazon.co.uk/dp/B07H9BQQ8V?psc=1&ref=ppx_yo2ov_dt_b_product_details',
    },
    {
      label: 'Extension Ladder',
      imageSources: ['extension-ladder1'],
      href: 'https://www.amazon.co.uk/gp/product/B0BWFCXVHZ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1',
    },
    {
      label: 'Broom',
      imageSources: ['broom'],
      href: 'https://www.amazon.co.uk/dp/B0B39DSSSM?ref=ppx_yo2ov_dt_b_product_details&th=1',
    },
  ]

  const mappedOutdoorEquipmentItems = getMappedHouseItems(
    outdoorEquipmentItems,
    'outdoor-equipment'
  )

  return <ImageGrid list={mappedOutdoorEquipmentItems} />
}

export default OutdoorEquipmentPage
