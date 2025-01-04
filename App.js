import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>

    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',// Center the content vertically
  },
  // heading: {
  //   fontWeight: 'bold', // Bold text
  //   color: '#6200EE', // Accent color
  // },
  body: {
    padding: 5,
    textAlign: 'justify',
    color: '#333',// Dark gray for better readability
  },
});
