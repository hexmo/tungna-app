import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './screens/Login';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Login />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2d2c2b',
    accent: '#e49314',
  },
};

// colors
// #2d2c2b black
// #e49314 yellow