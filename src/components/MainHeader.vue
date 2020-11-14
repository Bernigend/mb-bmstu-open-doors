<template>
  <section id="pagetop" class="first-page">
    <header class="page-header">
      <div class="wrapper">
        <a class="logo" href="/">
          <img :src="require('@/assets/logo.svg')" alt="МФ МГТУ" width="48" height="52">
          <div class="logo-txt">
            Мытищинский филиал<br><span class="nobr">МГТУ им. Н.&thinsp;Э.&thinsp;Баумана</span>
          </div>
          <div class="logo-txt__mobile">
            МФ МГТУ
          </div>
        </a>
        <button class="menu-btn" aria-label="Главное меню">
          <span class="menu-btn_txt">Меню</span>
          <span class="menu-btn_burger"></span>
        </button>
      </div>
    </header>

    <div class="fixed-header" style="display: none;">
      <div class="wrapper">
        <a class="fixed-header_logo" href="#pagetop">
          <div class="fixed-header_logo-img">
            <img :src="require('@/assets/logo.svg')" alt="МФ МГТУ" width="30" height="35">
          </div>
          <div class="fixed-header_logo-txt">
            МФ МГТУ
          </div>
        </a>
        <button class="fixed-header_menu-btn" aria-label="Меню">
          <span class="fixed-header_menu-btn_txt">Меню</span>
          <span class="fixed-header_menu-btn_burger"></span>
        </button>
      </div>
    </div>

    <div class="first-page_title">
      <div class="wrapper">
        <p class="first-page_date">28&nbsp;ноября 2020&nbsp;г.</p>

        <h1>День открытых дверей</h1>

        <p class="first-page_utp">Добро пожаловать!</p>
      </div>
    </div>

    <a class="first-page_arrow" href="#director"></a>
  </section>
</template>

<script>
export default {
name: "MainHeader"
}
</script>

<style lang="scss" scoped>
.first-page {
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 95vh;
  padding-top: 0;
  padding-bottom: 0;

  background-color: #00637F;
  background-image: url("~@/assets/lowpoly-bg.png");
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;

  color: white;

  @media screen and (max-width: 700px) {
    background-attachment: scroll;
  }

  &_title {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    text-align: center;
  }

  &_date {
    margin-top: 30px;
    margin-bottom: 25px;

    font-size: 36px;
    line-height: 1.2;

    color: #FFFFFF;

    @media screen and (max-width: 700px) {
      font-size: 24px;
    }

    @media screen and (max-width: 450px) {
      font-size: 20px;
    }
  }

  &_utp {
    margin: 0;
    margin-bottom: 60px;

    font-size: 28px;
    line-height: 1.5;

    color: #FFFFFF;

    @media screen and (max-width: 786px) {
      font-size: 20px;
    }

    @media screen and (max-width: 450px) {
      font-size: 18px;
    }

    a {
      color: rgba(255, 255, 255, 0.8);

      &:hover,
      &:active {
        color: white;
      }
    }
  }

  &_btn {
    position: relative;
    display: inline-block;
    padding: 15px 25px;

    font-size: 20px;
    line-height: 150%;

    border: 1px solid #FFFFFF;
    border-radius: 10px;
    color: white;

    user-select: none;
    transition: background-color 0.5s;

    &__online {
      padding: 15px 60px 15px 25px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 20px;
        right: 25px;
        width: 20px;
        height: 20px;

        border-radius: 50%;
        background: #80B28E;
        box-shadow: 0 0 10px rgba(72, 98, 80, 0.35);
        animation: pulse 1.5s infinite ease-in-out;
      }
    }

    &:hover,
    &:active {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }

  &_arrow {
    flex: 0 0 auto;
    align-self: center;
    margin-bottom: 60px;
    width: 44px;
    height: 44px;

    background: url("~@/assets/arrow.svg") top left;
    background-size: cover;

    animation: move .7s ease-in-out infinite alternate;

    @media screen and (max-width: 450px) {
      margin-bottom: 40px;
    }

    &:hover {
      opacity: 0.85;
    }
  }
}

.page-header {
  flex: 0 0 auto;

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (max-width: 550px) {
      padding-top: 30px;
    }

    @media screen and (max-width: 450px) {
      padding-top: 20px;
    }
  }

  .logo {
    display: flex;
    order: 1;
    flex: 0 1 auto;
    flex-wrap: nowrap;

    color: white;

    @media screen and (max-width: 550px) {
      align-items: center;
    }

    img {
      margin-right: 20px;

      @media screen and (max-width: 550px) {
        width: 40px;
        height: auto;
        margin-right: 14px;
      }
    }

    &-txt {
      font-size: 20px;
      line-height: 130%;

      @media screen and (max-width: 550px) {
        display: none;
      }

      &__mobile {
        display: none;

        @media screen and (max-width: 550px) {
          display: block;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }

    &:hover {
      opacity: 0.8;

      .logo-img {
        opacity: 0.8;
      }
    }
  }

  .menu-btn {
    order: 2;
    flex: 0 1 auto;
    align-self: auto;
    position: relative;
    padding: 20px 40px 20px 20px;
    color: white;
    user-select: none;
    cursor: pointer;

    &_txt {
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
    }

    &_burger {
      display: block;
      position: absolute;
      top: 30px;
      right: 0;
      width: 25px;
      height: 2px;
      background-color: white;

      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 25px;
        height: 2px;
        background-color: white;
      }
      &::after {
        top: 8px;
      }
      &::before {
        top: -8px;
      }
    }

    &:hover {
      color: rgba(255, 255, 255, 0.85);

      .menu-btn_burger,
      .menu-btn_burger::after,
      .menu-btn_burger::before {
        background-color:  rgba(255, 255, 255, 0.85);
      }
    }

  }
}

.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  transition: background-color 0.5s;

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    padding-top: 5px;
    padding-bottom: 5px;
  }

  &_logo {
    order: 1;
    flex: 0 1 auto;
    align-self: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    color: #444444;

    &-img {
      position: relative;
      width: 50px;
      height: 50px;
      margin-right: 10px;
      background-color: #e9e9e9;
      border-radius: 50%;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 30px;
        height: auto;
      }
    }

    &-txt {
      font-size: 20px;
      line-height: 130%;
    }

    &:hover {
      color: black;

      .fixed-header_logo-img {
        background-color: #e0e0e0;
      }
    }
  }

  &_menu-btn {
    order: 2;
    flex: 0 1 auto;
    align-self: auto;
    user-select: none;

    position: relative;
    padding: 20px 40px 20px 20px;
    color: #444444;
    cursor: pointer;

    &_txt {
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
    }

    &_burger {
      display: block;
      position: absolute;
      top: 30px;
      right: 0;
      width: 25px;
      height: 2px;
      background-color: #444444;

      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 25px;
        height: 2px;
        background-color: #444444;
      }
      &::after {
        top: 8px;
      }
      &::before {
        top: -8px;
      }
    }

    &:hover {
      color: black;

      .fixed-header_menu-btn_burger,
      .fixed-header_menu-btn_burger::after,
      .fixed-header_menu-btn_burger::before {
        background-color: black;
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .fixed-header_menu-btn,
  .page-header .menu-btn {
    width: 76px;
    height: 70px;
    padding: 20px;
    margin-right: -20px;
  }
  .fixed-header_menu-btn_txt,
  .page-header .menu-btn_txt {
    display: none;
  }
  .fixed-header_menu-btn_burger,
  .page-header .menu-btn_burger {
    position: relative;
    top: 0;
    right: 0;
    width: 35px;
    height: 3px;
  }
  .fixed-header_menu-btn_burger::after,
  .fixed-header_menu-btn_burger::before,
  .page-header .menu-btn_burger::after,
  .page-header .menu-btn_burger::before {
    content: "";
    display: block;
    position: absolute;
    width: 35px;
    height: 3px;
  }
  .fixed-header_menu-btn_burger::after,
  .page-header .menu-btn_burger::after {
    top: 10px;
  }
  .fixed-header_menu-btn_burger::before,
  .page-header .menu-btn_burger::before {
    top: -10px;
  }
}
</style>