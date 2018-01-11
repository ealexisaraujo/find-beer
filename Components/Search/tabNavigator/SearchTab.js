/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Keyboard
} from 'react-native'
import axios from 'axios'

import {Container, Content} from 'native-base'
import SearchHeader from '../SearchHeader'

export default class SearchTab extends Component {

static navigationOptions = {
  header: null
}

state={
  searchBeer: '',
  beerData: {}
}

beerSearch = () => {
  Keyboard.dismiss()
  const beerName=this.state.searchBeer.toLowerCase();
  const query = `http://api.brewerydb.com/v2/search?q=` + beerName + `&type=beer&key=3bfa114fd486762c59d7cb1661a8cf26`

  axios.get(query)
    .then((response) => {
      var data = response.data.data[0] ? response.data.data[0]: false
      console.log(data)
  })
}

  render () {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={(searchBeer) => this.setState({searchBeer})}
          beerSearch={this.beerSearch}
        />
        <Content>
        </Content>
      </Container>
    )
  }
}
