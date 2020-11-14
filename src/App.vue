<template>
  <div id="app">
    <MainHeader />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  src: url("~@/assets/fonts/Roboto/Roboto-Regular.woff2") format("woff2"), url("~@/assets/fonts/Roboto/Roboto-Regular.woff") format("woff");
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  src: url("~@/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("~@/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");
  font-display: swap;
}

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;

  color: #444444;

  z-index: 1;
}

section {
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 450px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

h1 {
  margin: 0 0 40px 0;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 88px;
  line-height: 1;

  color: white;

  @media screen and (max-width: 700px) {
    font-size: 60px;
  }

  @media screen and (max-width: 450px) {
    font-size: 50px;
  }

  @media screen and (max-width: 360px) {
    font-size: 46px;
  }
}

h2 {
  margin: 0 0 20px 0;

  font-weight: bold;
  font-size: 36px;
  line-height: 1.3;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
}

h3 {
  margin-top: 40px;
  margin-bottom: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 1.3;
}

a {
  text-decoration: none;
  color: #5d886a;
}

a:hover {
  color: #444444;
}

// сброс стилей для кнопок

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

.wrapper {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 40px;

  @media screen and (max-width: 450px) {
    padding: 0 20px;
  }
}

#app {
}
</style>
