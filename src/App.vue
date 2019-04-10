<template>
  <div id="app">
    <h1>hello vue</h1>
    <p>{{ test.name }}</p>
    <p>{{ test }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import data from "./mock/mock";
export default {
  name: "app",
  data() {
    return {
      test: {}
    };
  },
  beforeMount() {
    console.log("beformount:", this.$data);
  },
  mounted() {
    console.log("start mounted.");
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("http://test.cn").then(res => {
        this.test = res.data;
      });
    }
  },
  created() {
    console.log("before created:", this.$data);
    console.log("created");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
