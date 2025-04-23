import { CityCard, Error, Loading, SearchBox } from '@/components'
import { City } from '@/mock/cities/types'
import { getCities } from '@/services'
import { theme } from '@/theme'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Cities() {
  const [cities, setCities] = useState<City[]>([])
  const [filteredCities, setFilteredCities] = useState<City[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await getCities()
      if (!cities?.length) setError('Nenhuma cidade encontrada.')
      if (!!cities?.length) setCities(cities)
      if (!!cities?.length) setFilteredCities(cities)
      setLoading(false)
    }

    fetchCities()
  }, [])

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <View style={style.container}>
      <SearchBox cities={cities} setFilteredCities={setFilteredCities} />

      {!!filteredCities.length && (
        <FlatList
          data={filteredCities}
          renderItem={({ item }) => <CityCard item={item} />}
          keyExtractor={(item, index) => `${index}-${item.city}`}
          contentContainerStyle={style.list}
          ItemSeparatorComponent={() => <View style={style.separator} />}
        />
      )}

      {!filteredCities.length && <Text style={style.text}>Nenhuma cidade encontrada.</Text>}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    gap: theme.spacing.xl,
    paddingVertical: theme.spacing['2xl'],
    paddingHorizontal: theme.spacing.sm,
  },

  list: {
    paddingBottom: theme.spacing.xl,
  },

  separator: {
    height: theme.spacing.sm,
  },

  text: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    textAlign: 'center',
  },
})
