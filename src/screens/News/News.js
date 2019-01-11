import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import NewsPost from "../../components/NewsPost/NewsPost.js";
import { EmptyComponent } from "../../components/EmptyComponent/EmptyComponent.js";
import DataService from "../../service/DataService/DataService.js";
import StoryList from "./StoryList/StoryList.js";

export default class News extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [
        { name: { first: "Alice", last: "Alice" }, title: "123@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "1234@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "12345@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "1235@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "123455@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "123456@gmail.com" }
      ],
      stories: [
        { path: "../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png" },
        { path: "../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png" },
        { path: "../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png" },
        { path: "../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png" },
        { path: "../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png" },
        { path: "../../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png" }
      ],
      error: null,
      loadingPosts: [],
      page: 0,
      loadingPostsCount:10,
      isNewsRefreshing: false,
      dataService: new DataService(),
      isLoadMore: false
    };

    //this.getNewsPosts = this.getNewsPosts.bind(this);
    this.getMoreNewsPosts = this.getMoreNewsPosts.bind(this);
    //this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.onRefresh();
  }

  onRefresh() {
    console.log("refresh");
    this.setState({
      isNewsRefreshing: true
    });
    var loadingPosts = this.state.dataService.getNewsPosts({page: 0, count: this.state.loadingPostsCount});
    this.setState({
      loadingPosts: loadingPosts,
      page: 1,
      isNewsRefreshing: false
    });
  }

  getMoreNewsPosts() {
    console.log("GETMORE NEWS");
    this.setState({
      isNewsRefreshing: true
    });
    //это рефреш
    //здесь будет подгрузка данных с сервера
    //console.log("page: "+this.state.page+" loading: "+this.state.loadingPosts);
    //this.getMoreNewsPosts();
    var loadingPosts = this.state.dataService.getNewsPosts({page: this.state.page, count: this.state.loadingPostsCount});
  this.setState({
    loadingPosts: this.state.loadingPosts.concat(loadingPosts),
    isNewsRefreshing: false,
    page: this.state.page + 1
  });
    console.log("page: "+ this.state.page);
  }

/*  getMoreNewsPosts() {
    //при достижении конца списка
  /*  console.log("getMoreNewPosts");
    for (
      var i = this.state.page * 10;
      i < this.state.page * 10 + 10 && i < this.state.data.length;
      i++
    ) {
      console.log(
        i + ". " + this.state.data[i].name.first + this.state.loadingPosts
      );
      var joined = this.state.loadingPosts.concat(this.state.data[i]);
      console.log(joined);
      this.setState({ loadingPosts: joined });
      /*this.setState({
        loadingPosts: ['1','2','3']
      });
      console.log("lPLength " + this.state.loadingPosts.length);
    }

    this.setState({
      isNewsRefreshing: false
    });
    console.log(
      "2. page: " + this.state.page + " loading: " + this.state.loadingPosts
    );
    return this.state.loadingPosts;
  }*/

  renderHeader = () => {
    return (
      <View>
        <Text>What's new?</Text>
        <StoryList stories = {this.state.stories} />
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.loadingPosts}
          ListEmptyComponent={<EmptyComponent title="Записей нет" />}
          renderItem={({ item }) => <NewsPost title={item.title} />}
          keyExtractor={item => item.title}
          //onEndReached = {this.getMoreNewsPosts}
          onEndReachedThreshold={0.2}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isNewsRefreshing}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
