import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      post: {},
    };
  },
  getters: {},
  mutations: {
    updatePostTitle(state, value) {
      this.state.post.title = value;
    },
    updatePostBody(state, value) {
      this.state.post.body = value;
    },
    setPost(state, post) {
      this.state.post = post;
    },
  },
  actions: {
    updatePostTitle(context, value) {
      context.commit("updatePostTitle", value);
    },
    updatePostBody(context, value) {
      context.commit("updatePostBody", value);
    },
    fetchPost(context, { postId }) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
          context.commit("setPost", post);
        });
    },
  },
});
