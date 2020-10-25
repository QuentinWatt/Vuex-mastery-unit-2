<template>
  <div>
    <label>title</label> <br />
    <input
      type="text"
      v-model="$store.state.post.title"
      @input="updatePostTitle"
    />
  </div>
  <div class="mt-2">
    <label>body</label> <br />
    <textarea
      :value="$store.state.post.body"
      @input="updatePostBody"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "EditPost",
  methods: {
    updatePostTitle(event) {
      this.$store.dispatch("updatePostTitle", event.target.value);
    },
    updatePostBody(event) {
      this.$store.dispatch("updatePostBody", event.target.value);
    },
  },
};
</script>
