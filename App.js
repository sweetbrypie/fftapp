import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.biglogo} source={require('./images/large-white-bear.png')} />
      <Text style={styles.header}>Welcome to the {"\n"} Food for Thought App</Text>
      <View style={styles.row}>
        <View style={styles.iconcontainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('EventScreen') }}>
            <Image style={styles.icon} source={require('./images/calendar.png')} />
          </TouchableOpacity>
          <Text style={styles.icontext}>Event Calendar</Text>
        </View>
        <View style={styles.iconcontainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('AnnouncementsScreen') }}>
            <Image style={styles.icon} source={require('./images/announcements.png')} />
          </TouchableOpacity>
          <Text style={styles.icontext}>Announcements</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconcontainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('AboutUsScreen') }}>
            <Image style={styles.icon} source={require('./images/aboutus.png')} />
          </TouchableOpacity>
          <Text style={styles.icontext}>About Us</Text>
        </View>
        <View style={styles.iconcontainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('QuickLinksScreen') }}>
            <Image style={styles.icon} source={require('./images/quicklinks.png')} />
          </TouchableOpacity>
          <Text style={styles.icontext}>Quick Links</Text>
        </View>
      </View>
    </View>
  )
};

function EventScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate('WelcomeScreen') }}>
        <Image style={styles.minilogo} source={require('./images/minibear.png')} />
      </TouchableOpacity>
      <Text style={styles.subheader}>Event Calendar</Text>
      <Text style={styles.body}>filler</Text>
    </View>
  )
}

function AnnouncementsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate('WelcomeScreen') }}>
        <Image style={styles.minilogo} source={require('./images/minibear.png')} />
      </TouchableOpacity>
      <Text style={styles.subheader}>Announcements</Text>
      <Text style={styles.body}>filler</Text>
    </View>
  )
}

function AboutUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate('WelcomeScreen') }}>
        <Image style={styles.minilogo} source={require('./images/minibear.png')} />
      </TouchableOpacity>
      <Text style={styles.subheader}>About Us</Text>
      <Text style={styles.body}>Our program began in Fall 2017 with the idea to combine life skill classes with resources. We started with only our food seminar course. Since then, our program has grown to offer more courses and resources!
        {"\n"}{"\n"}We have begun our own meal system, laptop rental, and textbook library for our students. Additionally, we offer all our students the chance to gain teaching experience for units after they have taken a course. Our goal is to help other students gain life skills that they can take beyond the classroom setting.
        {"\n"}{"\n"}You can learn more by visiting us at <Text style={styles.underline} onPress={() => Linking.openURL('https://basicneeds.berkeley.edu/our-programs/food-for-thought/')}>www.bncfft.org</Text>
      </Text>
    </View>
  )
}

function QuickLinksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate('WelcomeScreen') }}>
        <Image style={styles.minilogo} source={require('./images/minibear.png')} />
      </TouchableOpacity>
      <Text style={styles.subheader}>Quick Links</Text>
      <Text style={styles.body}>We have compiled all of our most useful links about our program and resources for students to learn more about us!</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://basicneeds.berkeley.edu/our-programs/food-for-thought/')}>Program Website</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://forms.gle/bQwbRAH32rme3Wr68')}>Scholarship Application</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeQFV6HdI-kMg-__tav516M8MfFxC5T46MhmykLQ2m5HL5-BQ/viewform')}>Anonymous Feedback Form</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://calfoodforthought.us4.list-manage.com/subscribe?u=a913bff60f9f09ead338d42aa&id=6fe27feda2')}>Join our Newsletter!</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://forms.gle/B3z4wAVNbC24UWLx9')}>Join our Alumni Network!</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://www.facebook.com/bncfft')}>Follow us on Facebook!</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://www.instagram.com/bncfft/')}>Follow us on Instagram!</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="EventScreen" component={EventScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AnnouncementsScreen" component={AnnouncementsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="QuickLinksScreen" component={QuickLinksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
    height: 100,
    width: 100,
  },
  backarrow: {
    height: 50,
    width: 40,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '500',
    padding: 30,
    textAlign: 'center',
  },
  subheader: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '500',
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
    alignItems: 'center',
  },
  body: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'justify',
    padding: 20,
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontSize: 20,
    padding: 10,
  }
});
