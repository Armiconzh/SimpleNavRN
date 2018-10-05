import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Text style={styles.welcome}>
          Armico Nur Zul Haq
        </Text>
        <Text style={styles.welcome}>
          XI RPL 3 No.09
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  
export default Home