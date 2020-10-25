<template>
  <div style="text-align: left">
    <label>Insert post id: </label>
    <input v-model="postId" @input="this.fetchPost" />
  </div>
  <div class="flex">
    <div class="w-1-2">
      <ShowPost />
    </div>
    <div class="w-1-2">
      <EditPost />
    </div>
  </div>
</template>

<script>
import ShowPost from "./components/ShowPost.vue";
import EditPost from "./components/EditPost.vue";

export default {
  name: "App",
  components: {
    ShowPost,
    EditPost,
  },
  data() {
    return {
      postId: 1,
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      this.$store.dispatch("fetchPost", { postId: this.postId });
    },
  },
};
</script>
