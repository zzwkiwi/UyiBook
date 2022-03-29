var data = {
      //校区
      campus: [{
                  name: '厦门校区',
                  id: 0
            },
            {
                  name: '泉州校区',
                  id: 1
            }
      ],
      //年级
      grade: [{
                  name: '大一',
                  id: 0
            },
            {
                  name: '大二',
                  id: 1
            },
            {
                  name: '大三',
                  id: 2
            },
            {
                  name: '大四',
                  id: 3
            }
      ],
      dormitory: [{
                  name: '紫荆',
                  id: 0
            },
            {
                  name: '刺桐',
                  id: 1
            },
            {
                  name: '凤凰',
                  id: 2
            }
      ],
      //配置学院，建议不要添加太多，不然前端不好看
      college: [{
                  name: '通用',
                  id: -1
            },
            {
                  name: '计算机',
                  id: 0
            },
            {
                  name: '经管',
                  id: 1
            },
            {
                  name: '土木',
                  id: 2
            },
            {
                  name: '新闻',
                  id: 3
            },
            {
                  name: '化工',
                  id: 4
            },
            {
                  name: '机械',
                  id: 5
            },
            {
                  name: '材料',
                  id: 6
            },
            {
                  name: '建筑',
                  id: 7
            },
            {
                  name: '其它',
                  id: 8
            },
      ],
}

function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}