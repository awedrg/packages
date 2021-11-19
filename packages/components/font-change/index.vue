
<template>
  <div class="font" >
    <span class="font-item"
    @click="isShow = !isShow">A</span>
    <div class="seekBar" v-show="isShow">
      <div class="flag">
        <span class="small" nochange aaa>A</span>
        <span class="big" nochange>A</span>
      </div>
      <div class="point">
        <div @click="font = 1" :class="{active: font === 1}"></div>
        <div @click="font = 2" :class="{active: font === 2}"></div>
        <div @click="font = 3" :class="{active: font === 3}"></div>
        <div @click="font = 4" :class="{active: font === 4}"></div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
import store from '/store/index'
export default {
  name: 'fontChange',
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    font: {
      get () {
        return store.state.font
      },
      set (val) {
        store.dispatch('updateFont', val)
      }
    }
  },
  watch: {
    font () {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.font {
  position: relative;
  width: 10px;
  margin: auto;
  .font-item {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    color: #2c2c2c;
    font-size: 20px;
    font-weight: 700;
  }
  .font-item:hover{
    color: #00acf1;
  }
  .seekBar{
    z-index: 3;
    position: absolute;
    height: 80px;
    width: 200px;
    background: #fff;
    box-shadow:1px 1px 10px #666;
    border-radius: 5px;
    padding: 0 5px;
    box-sizing: border-box;
    line-height: 50px;
    .flag{
      padding-left: 6px;
      padding-right: 13px;
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .big{
        font-size: 18px;
      }
    }
    .point{
      display: flex;
      justify-content: space-between;
      width: 100%;
      div{ 
        cursor: pointer;
        width: 18px;
        height: 18px;
        background: #ccc;
        border-radius: 50%; 
        border: 5px solid #fff; 
        z-index: 2;
        margin-top: 35px;
      }
      .active {
        background-color: #00acf1;
      }
    }
    .line{
      position: absolute;
      margin-top: -9px;
      height: 1px;
      width: 180px;
      border-top: 1px solid #ccc;
      text-align: center;
    }
  }
  .seekBar:before{
    display: block;
    content: '';
    border-width: 8px 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    /* 定位 */
    position: absolute;
    left: 10%;
    top: -16px;
  }
}
</style>