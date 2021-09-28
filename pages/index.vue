<template>
  <div class="bg">{{res}}</div>
</template>

<script>
export default {
   async asyncData({app}){
    const res = await app.api.GetPosts({})
    return {res}
  }
}
</script>
<style lang="scss" scoped>
.bg{
  width: 100px;
  height: 100px;
  background: $background-color;
}
</style>
