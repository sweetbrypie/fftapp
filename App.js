import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.biglogo} source={require('./images/large-white-bear.png')} />
      <Text style={styles.header}>Welcome to the {"\n"} Food for Thought App</Text>
      <View style={styles.row}>
        <View style={styles.iconcontainer}>
          <Image style={styles.icon} source={require('./images/calendar.png')} />
          <Text style={styles.icontext}>Event Calendar</Text>
        </View>
        <View style={styles.iconcontainer}>
          <Image style={styles.icon} source={require('./images/announcements.png')} />
          <Text style={styles.icontext}>Announcements</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconcontainer}>
          <Image style={styles.icon} source={require('./images/aboutus.png')} />
          <Text style={styles.icontext}>About Us</Text>
        </View>
        <View style={styles.iconcontainer}>
          <Image style={styles.icon} source={require('./images/quicklinks.png')} />
          <Text style={styles.icontext}>Quick Links</Text>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5683C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biglogo: {
    height: 100,
    width: 200,
  },
  minilogo: {

  },
  header: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '500',
    padding: 30,
    textAlign: 'center',
  },
  iconcontainer: {
    height: 150,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#234579',
    borderWidth: 3,
  },
  icontext: {
    color: '#FFFFFF',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    margin: 15,
  }
});

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
