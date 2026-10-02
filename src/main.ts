import { createApp } from 'vue'

const myApp1 = createApp({
  data() {
    return {
      message: 'Hello hhhhh',
      ID: 123456,
    }
  },
})
myApp1.mount('#app1')

const myApp2 = createApp({
  data() {
    return {
      message: 'Hello App2 !!!',
    }
  },
})
myApp2.mount('#app2')
