<template>
  <div>{{res}}</div>
</template>

<script>
export default {
   async asyncData({app}){
    const res = await app.api.GetPosts({})
    return {res}
  }
}
</script>
