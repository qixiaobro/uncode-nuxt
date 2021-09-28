<template>
  <header>
    <b-container class="d-flex wrap">
      <span class="logo">UnCode</span>
      <img class="hamburger" src="@/assets/icons/hamburger.png" />
    </b-container>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>

<style lang='scss' scoped>
header {
  font-family: 'JetBrains Mono', monospace;
  .wrap {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 24px;
    font-weight: 600;
    color: $main-color;
  }
  .hamburger {
    margin-left: auto;
    width: 28px;
    height: 28px;
  }
  @media (min-width: 576px) {
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    .hamburger{
      display: none;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
  }
}
</style>
