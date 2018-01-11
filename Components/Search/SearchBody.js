/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from 'react-native'

import {Content, ListItem, List} from 'native-base'

export default class SearchBody extends Component {
  render () {
    const beerData = this.props.beerData

    return (
      <Content>
        <ListItem itemDivider style={styles.image}>
          <Image source={{uri: beerData.labels.large}} style={{height: 200, width: 200}} />
        </ListItem>

        <List style={styles.list}>
          <ListItem itemDivider>
            <Text>Name</Text>
          </ListItem>
          <ListItem style={styles.tittleBeer}>
            <View>
              <Text>{beerData.name}</Text>
            </View>
            <View>
              <Button onPress={() => this.addToFavorites(beerData.name)} title='+ Favorites' />
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Text>Category</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.style.category.name}</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>Description</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.description}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Rating</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.abv}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Is is organic?</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.isOrganic === 'Y' ? 'Yes' : 'No'}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>
              <Text>Availability</Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.available.description ? beerData.available.description : 'No Info'}</Text>
          </ListItem>
        </List>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  },
  tittleBeer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
