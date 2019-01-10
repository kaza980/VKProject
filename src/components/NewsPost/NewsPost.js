import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NewsPost extends Component<Props> {
  render(){
    return(
      <View>
      <Text style={styles.newsPost}>{this.props.title}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  newsPost: {
    width: 100,
    height: 100
  }
});
