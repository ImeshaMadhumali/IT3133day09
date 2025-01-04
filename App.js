import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
       
        <StatusBar style="auto" />
      </View>
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
