import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from './Calendar.js'

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
      {/* I want to show my Google Calendar here */}
      <Calendar/>
      {/* I get an error here (see above for more details on error) */}
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
      <Text style={styles.body}>You can keep in touch with all the Food for Thought Program by reading our announcements through the newsletter! We use the newsletter to communicate upcoming events, program updates, and other exciting opportunities.
        {"\n"}{"\n"}<Text style={styles.underline} onPress={() => Linking.openURL('https://calfoodforthought.us4.list-manage.com/subscribe?u=a913bff60f9f09ead338d42aa&id=6fe27feda2')}>Click here to begin receiving our future newsletters!</Text>
        {"\n"}{"\n"}Here are the newsletters from our Spring 2021 semester!
        {"\n"}{"\n"}January Newsletter (to be released!)
        {"\n"}{"\n"}February Newsletter (to be released!)
        {"\n"}{"\n"}March Newsletter (to be released!)
        {"\n"}{"\n"}April Newsletter (to be released!)
        {"\n"}{"\n"}May Newsletter (to be released!)
        </Text>
    </View>
  )
}

function AboutUsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => { navigation.navigate('WelcomeScreen') }}>
          <Image style={styles.minilogo} source={require('./images/minibear.png')} />
        </TouchableOpacity>
        <Text style={styles.subheader}>About Us</Text>
        <Text style={styles.body}>Our program began in Fall 2017 with the idea to combine life skill classes with resources. We started with only our food seminar course. Since then, our program has grown to offer more courses and resources!
          {"\n"}{"\n"}We have begun our own meal system, laptop rental, and textbook library for our students. Additionally, we offer all our students the chance to gain teaching experience for units after they have taken a course. Our goal is to help other students gain life skills that they can take beyond the classroom setting.
          {"\n"}{"\n"}You can learn more by visiting us at <Text style={styles.underline} onPress={() => Linking.openURL('https://basicneeds.berkeley.edu/our-programs/food-for-thought/')}>www.bncfft.org</Text>
        </Text>
        <Text style={styles.subheader}>{"\n"}Our Seminars</Text>
        <Text style={styles.body}>For the Spring 2021 Semester, we offer five seminars for our students to enroll in.
          {"\n"}{"\n"}Our Core Seminars are two units each and can be taken for letter grade or Pass / No Pass; they focus on the development of important life skills that we believe every student should have, whether it be for professional development or personal care.
          {"\n"}-- Computer Seminar
          {"\n"}-- Emotion Seminar
          {"\n"}-- Narrative Seminar
          {"\n"}-- Nutrition Seminar
          {"\n"}{"\n"}Our Community Seminars are one unit each and can only be taken Pass / No Pass; they focus on how individual impact improve areas that a community may struggle with.
          {"\n"}-- Cooking Seminar
        </Text>
        <Text style={styles.subheader}>{"\n"}Our Resources</Text>
        <Text style={styles.body}>We understand that the diverse student community at Cal means that there are those that sometimes don’t have access to the resources or supplies that many other students take for granted. Those blockers can really interfere with a student’s growth and productivity, especially when trying to prepare for life after their time at Cal. Our program works to identify, acquire, and distribute in-demand resources that Cal students need to succeed. 
          {"\n"}{"\n"}Thus, our program offers the following resources to all enrolled Food for Thought students:
          {"\n"}-- Textbook library
          {"\n"}-- Free meals and snacks
          {"\n"}-- Laptop rentals
          {"\n"}-- Free wellness and health supplies
          {"\n"}-- Free test prep supplies
        </Text>
      </ScrollView>
    </SafeAreaView>
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
      <Text style={styles.underline} onPress={() => Linking.openURL('https://docs.google.com/spreadsheets/d/1F3Jgi2SV1wS3o-Q-xN95fAUsBWdOdeIlW8k_9nidAYA/edit?usp=sharing')}>Program Resources</Text>
      <Text style={styles.underline} onPress={() => Linking.openURL('https://docs.google.com/presentation/d/1Ha1WxCArG_y4GBWG_spCLCyegrl3VFch3cDOHiwrrUQ/edit?usp=sharing')}>Program Info Session Slides</Text>
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
    alignSelf: 'center'
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
