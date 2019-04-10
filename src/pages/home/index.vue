<template>
  <div class="home-container">
    <h1>home page</h1>
    <router-link :to="{name: 'user', params: {userId: '123'}}">link to user</router-link>
    <br>
    <router-link to="/dataVisual">link to data visual</router-link>
    <br>
    <router-link to="/webgl">link to webgl test</router-link>
    <br>
    <router-link to="/svg-test">link to svg test</router-link>
    <router-view></router-view>
    <router-view name="nav"></router-view>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      user: "user"
    };
  }
};
</script>

<style lang="less" scoped>
.home-container {
  color: black;
}
</style>