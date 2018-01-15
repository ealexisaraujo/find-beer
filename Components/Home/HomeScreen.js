/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import {Button} from 'native-base'
var backgroundImage = require('../../assets/HomeScreen/home_screen_background.jpg')

import * as firebase from 'firebase'

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

componentDidMount() {
  firebase.auth().signInWithEmailAndPassword("ala1289@gmail.com", "password")
}


  render () {
    return (
      <View style={styles.homeScreenView}>
        <View style={styles.background}>
          <Image style={styles.image}
            source={backgroundImage} />
        </View>
        <Button
          block={true}
          onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
        >
          <Text style={{color: 'white'}}>Search Beers</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  image: {
    flex: 1,
    height: null,
    width: null
  }
})
