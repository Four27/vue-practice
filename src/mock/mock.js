import Mock from 'mockjs';
export default Mock.mock('http://test.cn', {
  //输出数据
  name: '@name', //随机生成姓名

  'age|1-10': 10

  //还可以自定义其他数据
});
