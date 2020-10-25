<template>
  <h1>{{ $store.state.post.title }}</h1>
  <div>
    {{ $store.state.post.body }}
  </div>
</template>

<script>
export default {
  name: "ShowPost",
};
</script>
