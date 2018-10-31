import Mock from 'mockjs';
const Random = Mock.Random;

let agents = [];
let COUNT = [];
for (let i = 1; 1 <= 100; i++) {
  COUNT.push(i);
}
for (let i = 1; i <= COUNT.length; i++) {
  agents.push(Mock.mock({
    key: Random.guid(),
    time: Random.datatime(),
    name: Random.cname(),
    telphone: /^1[0-9]{10}$/,
    email: Random.email(),
    'type|1': ['全部', '上传数据审核', '案例试用审核', '定制需求申请审核'],
    'status|1': ['全部', '未完结', '已完结'],
    remark: Random.cparagraph(1,3)
  }));
}

export { agents };
