import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function CityDetails() {
  const { cityName } = useLocalSearchParams()

  return (
    <View>
      <Text>{cityName}</Text>
    </View>
  )
}
