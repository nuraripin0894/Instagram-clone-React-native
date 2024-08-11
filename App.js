import { TamaguiProvider, createTamagui} from '@tamagui/core'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { config } from '@tamagui/config/v3'
import { useFonts } from 'expo-font'
import Header from './components/Header'
import Stories from './components/Stories'
import BottomNavigation from './navigator/BottomNavigation'
import { ScrollView } from 'tamagui'
import Post from './components/Post'

const tamaguiConfig = createTamagui(config)

export default () => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }
  
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
        <ScrollView vertical >
            <Header />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Stories />
            </ScrollView>
              <Post />
        </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <BottomNavigation />
        </View>
      </SafeAreaView>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  content: {
    flex: 1, 
  },
  bottomContainer: {
    position: 'fixed',
    borderTopWidth: 0.5, 
    borderTopColor: 'gray',
    paddingBottom: 7,
    paddingTop: 7,
  }
});