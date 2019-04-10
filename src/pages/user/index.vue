<template>
  <div>
    <p>user {{ userId }}</p>
    <div class="semicircle"></div>
    <div class="semicircle-sec"></div>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    userId: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.semicircle {
  width: 0;
  height: 0;
  border: 100px solid #000;
  border-radius: 50%;
  border-color: #000 transparent transparent #000;
  transform: rotatez(-45deg);
}

.semicircle-sec {
  width: 100px;
  height: 200px;
  background: #000;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
</style>