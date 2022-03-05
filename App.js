import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView style={styles.container} source={{ uri: 'https://atlas.p-stageenv.xyz/' }} />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 0,
    paddingHorizontal: 20,
  },
});
