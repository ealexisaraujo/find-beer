import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {StackNavigator} from 'react-navigation'

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyBLEebcV8Mo7tYbf2BtWUfryfzOQXJafQo',
  authDomain: 'find-beer-96cda.firebaseapp.com',
  databaseURL: 'https://find-beer-96cda.firebaseio.com',
  projectId: 'find-beer-96cda',
  storageBucket: '',
  messagingSenderId: '601612027344'
}

firebase.initializeApp(firebaseConfig)

const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  SearchTabNavigator: {screen: SearchTabNavigator}
}, {
  initialRouteName: 'HomeScreen'
})

export default App
