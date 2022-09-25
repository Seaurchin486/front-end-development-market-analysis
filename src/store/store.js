import { createStore } from 'vuex'
// 初始化处理数据
const dataSources = import.meta.glob('/src/assets/dataSource/*/*.js', { eager: true, import: 'default' })
let handleData = Object.keys(dataSources).reduce((pre, key) => {
  // '/src/assets/dataSource/hangzhou/20220919.js'
  let propertyNames = key.slice(23).match(/\w+/g)
  // console.log(propertyNames[0], propertyNames[1])

  // 生成对应对象
  if (!pre.hasOwnProperty(propertyNames[0])) {
    pre[propertyNames[0]] = {}
  }
  // skills转化为数组并排序
  let skillRanking = Object.entries(dataSources[key].skills)
  skillRanking = skillRanking.sort((entryArr1, entryArr2) => {
    return entryArr2[1] - entryArr1[1]
  })
  pre[propertyNames[0]][propertyNames[1]] = dataSources[key] // 数据需要处理
  pre[propertyNames[0]][propertyNames[1]].skills = skillRanking
  return pre
}, {})
export default createStore({
  state: { // 定义全局状态
    data: handleData, 
    // {
    //   hangzhou: {
    //     '20220919': {
    //       // 对应每个图表的数据
    //     }
    //   }
    // }
  },
  mutations: { // 定义状态突变方法 commit
    increment(state) {
      state.abc++
    }
  }
})