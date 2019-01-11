import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Story from "./Story/Story.js";
import {EmptyComponent} from "../../../components/EmptyComponent/EmptyComponent.js"

export default class StoryList extends Component<Props> {
  constructor(props) {
    super(props);
    setState = {
      stories: []
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.stories}
          ListEmptyComponent={<EmptyComponent title="Историй нет" />}
          renderItem={({ item }) => <Story path={item.path} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
