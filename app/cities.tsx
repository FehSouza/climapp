import { CityCard } from '@/components'
import { cities } from '@/mock'
import { theme } from '@/theme'
import { FlatList, StyleSheet, View } from 'react-native'

export default function Cities() {
  return (
    <FlatList
      data={cities}
      renderItem={({ item }) => <CityCard item={item} />}
      keyExtractor={(item, index) => `${index}-${item.city}`}
      contentContainerStyle={style.container}
      ItemSeparatorComponent={() => <View style={style.separator} />}
    />
  )
}

const style = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.sm,
  },

  separator: {
    height: theme.spacing.sm,
  },
})
