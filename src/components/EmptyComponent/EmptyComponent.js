import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const EmptyComponent = ({ title }) => (
  <View style = {styles.emptyView}>
    <Text style={styles.emptyText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 30,
  },
});
