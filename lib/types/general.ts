export interface HouseItem extends Partial<Record<string, any>> {
  label: string
  imageSources: string[]
  brand?: string
  model?: string
  location?: string
}
