<template>
    <v-distpicker></v-distpicker>
    <!-- <button @click="choose">点我选择区域</button> -->
  <!-- <div class="divwrap" v-if="show">
    <v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
    <button @click="choose">点我选择区域</button>
  </div> -->
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  name: 'getAddress',
  components: {VDistpicker},
  data () {
    return {
      show: false
    }
  },
  methods: {
    choose () {
      this.show = !this.show
    },
    onChangeProvince (a) {
      console.log(a)
    },
    onChangeCity (a) {
      console.log(a)
    },
    onChangeArea (a) {
      console.log(a)
      this.show = false
    }
  }
}
</script>
<style>
</style>
