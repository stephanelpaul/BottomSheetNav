import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const FirstStep = ({navigation}) => (
  <View style={styles.contentContainer}>
    <Text>First Step</Text>
    <Button onPress={() => navigation.navigate('second')} title="Second" />
  </View>
);

const SeconStep = () => (
  <View style={styles.contentContainer}>
    <Text>Second Step</Text>
  </View>
);

const Stack = createStackNavigator();

const NewEntrySheet = ({navigation}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        navigation.goBack();
      }
    },
    [navigation],
  );

  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
      safeAreaInsets: {top: 0},
      cardStyle: {
        backgroundColor: 'white',
        overflow: 'visible',
      },
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose>
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="first" component={FirstStep} />
            <Stack.Screen name="second" component={SeconStep} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Button
            onPress={() => navigation.navigate('second')}
            title="Second"
          />
        </View> */}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default NewEntrySheet;
