<template>
  <div class="wrapper">
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="item in banners">
        <image class="image" resize="cover" :src="item.banner_pic2"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <div class="categorys">
      <div class="category" v-for="category in categorys" @click="toCategory(category)">
        <image class="category-image" :src="category.item_pic"/>
        <text class="category-name">{{category.item_name}}</text>
      </div>
    </div>
    <div class="title"><text>热门贷款</text></div>
    <div class="contents">
      <ad-item 
          v-for="(item, index) in ads" 
          :key="index" 
          :data="item">
      </ad-item>
    </div>
  </div>
</template>
<script>
import api from '../service'
import AdItem from '../components/AdItem.vue'
export default {
  components: {
    AdItem
  },
  computed: {
    banners () {
      return this.data.ad_banner_vos || []
    },
    adverts () {
      return this.data.ad_success_cases || []
    },
    ads () {
      return this.data.ad_list_vos || []
    },
    categorys () {
      return this.data.ad_item_list || []
    }
  },
  created () {
    api.get('ads/index2').then((req) => {
      this.data = req.data
    })
  },
  data () {
    return {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      data: {}
    }
  },
  methods: {
    update (e) {
      this.target = 'Weex'
      console.log('target:', this.target)
    },
    toCategory (category) {
      console.log(category)
    }
  }
}
</script>
<style>
html, body {
  padding: 0;
  margin: 0;
}
.wrapper { 
  align-items: center; 
}
.image {
  width: 750px;
  height: 252px;
}
.slider {
  width: 750px;
  height: 252px;
}
.frame {
  width: 750px;
  height: 252px;
  position: relative;
}
.indicator {
  width: 750px;
  height: 50px;
  item-color: rgba(0, 0, 0, 0.2);
  item-selected-color: white;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
}

.categorys{
  width: 750px;
  flex-wrap: wrap;
  flex-direction: row;
}
.category{
  width: 250px;
  height: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-around;
  align-items: center;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-right-width: 1px;
  border-bottom-width: 1px;
  /* box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1); */
}
.category-image{
  width: 100px;
  height: 100px;
}
.category-name{
  margin-top: 20px;
  font-size: 20px;
}
</style>
