import React, { Component } from "react";
import { FlatList, StyleSheet, View, Image } from "react-native";

export default class StoryList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }
  render() {
    return (
      <View>
        <Image
          style={
            this.state.isShown
              ? styles.story_icon__isShown
              : styles.story_icon
          }
          source={require("../../../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  story_icon: {
    width: 86,
    height: 86,
    borderColor: "#ff0000",
    borderWidth: 2,
    borderRadius: 50
  },
  story_icon__isShown: {
    width: 86,
    height: 86,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 50
  }
});
