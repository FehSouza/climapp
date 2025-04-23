import { CityCard, SearchBox } from '@/components'
import { cities } from '@/mock'
import { theme } from '@/theme'
import { ordersCities } from '@/utils'
import { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Cities() {
  const orderedCities = ordersCities(cities)
  const [filteredCities, setFilteredCities] = useState(orderedCities)

  return (
    <View style={style.container}>
      <SearchBox cities={orderedCities} setFilteredCities={setFilteredCities} />

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
