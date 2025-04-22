import { CityCard, SearchBox } from '@/components'
import { cities } from '@/mock'
import { theme } from '@/theme'
import { FlatList, StyleSheet, View } from 'react-native'

export default function Cities() {
  return (
    <View style={style.container}>
      <SearchBox />

      <FlatList
        data={cities}
        renderItem={({ item }) => <CityCard item={item} />}
        keyExtractor={(item, index) => `${index}-${item.city}`}
        contentContainerStyle={style.list}
        ItemSeparatorComponent={() => <View style={style.separator} />}
      />
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
})
