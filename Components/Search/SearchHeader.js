/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import {Header, Item, Icon, Input} from 'native-base'

export default class SearchHeader extends Component {
  render () {
    return (
      <Header
        style={styles.headerView}
        searchBar
        rounded
      >
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Enter beer name'
            onChangeText={this.props.onChangeText}
            returnKeyType='search'
            onSubmitEditing={this.props.beerSearch}
          />
        </Item>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  headerView: {
    height: 80
  }
})
