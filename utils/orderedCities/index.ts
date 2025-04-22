import { City } from '@/mock/cities/types'

export const ordersCities = (cities: City[]) => {
  return cities.sort((a, b) => {
    if (!a.city || !b.city) return 0

    const [_, stateA] = a.city.split(', ')
    const [__, stateB] = b.city.split(', ')
    if (!stateA || !stateB) return 0

    if (stateA > stateB) return 1
    if (stateA < stateB) return -1
    return 0
  })
}
