<template>
  <div class="hello">
    <!-- <h2>{{ msg }}</h2>
    <button @click="testSpy">使用sinon封装好的spy方法测试匿名spy</button>-->
    <br>
    <br>
    <button @click="testObjectSpy">使用sinon封装好的spy方法测试spy替代一个对象方法</button>
    <br>
    <br>
    <button @click="testObjectStub">使用sinon封装好的stub方法测试stub替代一个对象方法</button>
    <br>
    <br>
    <!-- <button @click="onInitSpy">自己封装一个spy方法，实现与spy相同的功能</button> -->
  </div>
</template>

<script>
import sinon from "sinon";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    testObjectSpy() {
      var testObject = {
        test: function(name) {
          console.log("hello：" + name);
        }
      };
      var spy = sinon.spy(testObject, "test");

      spy("Hello");

      console.log("spy.callCount:" + spy.callCount);

      spy.restore();
    },
    testObjectStub() {
      var testObject = {
        test: function(name) {
          console.log("hello：" + name);
        }
      };
      var stub = sinon.stub(testObject, "test");

      stub("Hello");

      console.log("stub.callCount:" + stub.callCount);

      stub.restore();
    }
    // testSpy() {
    //   var spy = sinon.spy();
    //   spy("Hello", "World");
    //   console.log(spy.firstCall.args);
    // },
    // createSpy(targetFunc) {
    //   var spy = function() {
    //     spy.args = arguments;
    //     spy.returnVal = targetFunc.apply(this, arguments);
    //     return spy.returnVal;
    //   };

    //   return spy;
    // },
    // sum(a, b) {
    //   return a + b;
    // },
    // onInitSpy() {
    //   var spySum = this.createSpy(this.sum);
    //   spySum(1, 3);
    //   console.log("spySum.args:", spySum.args);
    //   console.log("spySum.returnVal:", spySum.returnVal);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
