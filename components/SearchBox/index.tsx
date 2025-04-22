import { StyleSheet, Text, View } from 'react-native'

export const SearchBox = () => {
  return (
    <View style={style.container}>
      <Text>Search</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    minHeight: 40,
  },
})
