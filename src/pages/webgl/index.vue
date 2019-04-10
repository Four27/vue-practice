<template>
  <div>
    <p>webgl</p>
    <canvas id="glcanvas">
      your browser doesn't appear to support the HTML5
      <code>&lt;canvas&gt;</code> element.
    </canvas>
  </div>
</template>

<script>
export default {
  name: "webgl",
  data() {
    return {};
  },
  mounted() {
    const canvas = document.getElementById("glcanvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
      alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
      return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
};
</script>

<style lang="less">
#glcanvas {
  width: 800px;
  height: 800px;
}
</style>
