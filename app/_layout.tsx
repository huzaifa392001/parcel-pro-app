import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Create the isLoggedIn variable
  const [loaded] = useFonts({
    "axiform-regular": require('../assets/fonts/Axiforma-Regular.ttf'),
    "axiform-medium": require('../assets/fonts/Axiforma-Regular.ttf'),
    "axiform-bold": require('../assets/fonts/Axiforma-Regular.ttf'),
    "wosker": require('../assets/fonts/Wosker.otf'),
  });

  // Here, you would typically fetch or check the user's authentication status
  useEffect(() => {
    // Simulate a login check (you can replace this with an actual check)
    const fetchLoginStatus = async () => {
      // Replace the line below with your actual login check logic
      const userLoggedIn = true; // Example: Retrieve from AsyncStorage or your auth state
      setIsLoggedIn(userLoggedIn);
    };

    fetchLoginStatus();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName={isLoggedIn ? '(client)' : '(auth)'}> {/* Conditionally set initialRouteName */}
        <Stack.Screen name="(client)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
