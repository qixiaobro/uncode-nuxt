export default function ({ app, $axios, redirect }, inject) {
  const API = {}

  $axios.setBaseURL('https://blog.techfly.top/')
  API.GetPosts = (params, options) => {
    return $axios.post('uncode/api/posts', params, options).then((res) => {
      return res.data
    })
  }

  app.api = API

  inject('api', API)
}
