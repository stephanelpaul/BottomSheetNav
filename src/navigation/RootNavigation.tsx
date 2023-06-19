import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BottomSheetNavigator from './BottomSheetNavigation';
import NewEntrySheet from '../screens/NewEntrySheet';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => (
  <SafeAreaView style={{flex: 1}}>
    <Text>Home</Text>
    <Button
      onPress={() => navigation.navigate('bottom', {screen: 'first'})}
      title="next"
    />
  </SafeAreaView>
);

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="bottom"
        component={NewEntrySheet}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          animation: 'none',
        }}
      />
    <Stack.Screen
        name="second"
        component={NewEntrySheet}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          animation: 'none',
        }}
      />
    </Stack.Navigator>
  );
}
