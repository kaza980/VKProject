import React from "react";

export default class DataService {
  constructor() {
    this.state = {
      data: [
        { name: { first: "Alice", last: "Alice" }, title: "123@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "1234@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "12345@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "1235@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "123455@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "123456@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "12322@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "123422@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "1234522@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "123522@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "12345522@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "12345622@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "12333@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "123433@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "1234533@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "123533@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "12345533@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "12345633@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "12344@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "123444@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "1234544@gmail.com" },
        { name: { first: "Alice", last: "Alice" }, title: "123544@gmail.com" },
        { name: { first: "Mike", last: "Mike" }, title: "12345544@gmail.com" },
        { name: { first: "Katy", last: "Katy" }, title: "12345644@gmail.com" }
      ]
    };
  }

  getNewsPosts(obj) {
    console.log("getMoreNewPosts");
    console.log("page: " + obj.page + " count: " + obj.count);
    var loadingPosts = [];
    for (
      var i = obj.page * obj.count;
      i < obj.page * obj.count + obj.count && i < this.state.data.length;
      i++
    ) {
      console.log(i + ". " + this.state.data[i].name.first);
      loadingPosts = loadingPosts.concat(this.state.data[i]);
      console.log(loadingPosts);

      console.log("lPLength " + loadingPosts.length);
    }

    return loadingPosts;
  }

  getStories(obj) {
    console.log("getStories");
    return this.state.stories;
  }
}
