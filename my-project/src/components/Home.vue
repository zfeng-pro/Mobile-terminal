<template>
  <div class="index">
    <!--头部-->
    <div class="header">
      <router-link to="./List" class="more"></router-link>
    </div>
    <!--轮播图-->
    <div class="swiper-container">

      <swiper :options="swiperOption" ref="mySwiper">

        <swiper-slide><img class="runimg" src="./../assets/image/banner轮播.png" alt=""></swiper-slide>
        <swiper-slide><img class="runimg" src="./../assets/image/lun2.jpeg" alt=""></swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

    <!--菜单列表-->
    <div class="nav">
      <ul class="navul">
        <li>
          <div class="img">
            <img src="./../assets/image/list1.png" alt="">
          </div>
          <div>面授课程</div>
        </li>
        <li>
          <div class="img">
            <img src="./../assets/image/list2.png" alt="">
          </div>
          <div>网校课程</div>
        </li>
        <li>
          <div class="img">
            <img src="./../assets/image/list6.png" alt="">
          </div>
          <div>图书材料</div>
        </li>
        <li>
          <div class="img">
            <img src="./../assets/image/list3.png" alt="">
          </div>
          <div>在线讲座</div>
        </li>
        <li>
          <div class="img">
            <img src="./../assets/image/list5.png" alt="">
          </div>
          <div>各地校区</div>
        </li>
      </ul>
    </div>
    <!--最新活动-->
    <div class="activity">
      <div class="newimg"></div>
      <div class="newx">
        <p>2017甘肃乡镇公务员考试笔试备考免费讲座</p>
         <router-link to="./Article"><p class="p">陕西乡镇公务员考试模考活动</p></router-link>
      </div>
      <div class="newioc"></div>
    </div>
    <!--头条-->
    <div class="Headlines">
        <div class="newTitle"label-width="80px" style="text-align: center; text-size: 18px" >
          <el-form ref="form" :model="form" style="margin: 0 auto;">
            <!--<el-form-item class=""  style="margin: 0 auto;">-->
              <el-select v-model="form.region" placeholder="选择报考省份" class="myselect">
                <el-option label="河南" value="henan"></el-option>
                <el-option label="湖南" value="shanghai"></el-option>
                <el-option label="海南" value="beijing"></el-option>
              </el-select>
            <!--</el-form-item>-->

          </el-form>
          <div class="morenew"></div>
        </div>
        <div>
          <ul>
            <li v-for="item in list" class="liss">{{item.new}}</li>
          </ul>
        </div>
    </div>
    <Foot/>
  </div>
</template>

<script >
  import Foot from './foot';
export default {
  name: 'Home',
  components: {Foot},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
        autoplay : 2000,
        loop : true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        paginationAsRange:true,
        parallax: true,

      },
      form: {
        region: '',
        delivery: false,
      },
      list:[
        {"new":"2017河南选调生考试公告"},
        {"new":"2017河南选调生考试公告"},
        {"new":"2017河南选调生考试公告"},
        {"new":"2017河南选调生考试公告"},
      ]
    }
  },
  // computed: {

  // },
     mounted() {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .index{
    width: 750px;
    height: 1370px;
  }
  .header{
    width: 750px;
    height: 130px;
    background-image: url("./../assets/image/head.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 0 solid #ccc;
  }
  .more{
    margin: 80px 30px 0 0 ;
    width: 50px;
    height: 12px;
    float: right;
    background-image: url("./../assets/image/更多.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .swiper-container{ width: 100%; height: 303px; position: relative;}
  .runimg{width: 100%;}

    //菜单列表
  .nav{ width: 100%; height: 210px}
  .navul{width: 100%; height: 100%;display: flex;}
  .navul >li{
    flex           : 1;
    display        : flex;
    flex-direction : column;
    align-items    : center;
    justify-content: center;
    font-size :22px;
  }
  .navul >li>.img{ width: 100px; height: 100px; padding 20px 0;}
  .img>img{ width: 100%; height: 100%;}
  .activity{height:150px;border-bottom:10px solid #eeeeee}
  .newimg {
    float: left
    margin: 35px 30px;
    width: 79px
    height: 74px
    background-image : url("./../assets/image/newactity.png")
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
    //最新活动
  .newx { margin: 35px 30px; float: left; text-align left;
    width: 425px;overflow hidden}
  .newx p{font-size: 22px;line-height: 40px;}
  .newx .p{font-weight: 600;}
  .newioc{
    float:right; width: 84px; height: 81px;
    background-image: url("./../assets/image/rednew.png");
    background-repeat no-repeat;
    background-size :100% 100%;
  }

  //头条
  .Headlines{
    margin: 0 30px
    width: 690px;
    height: 450px;
    border-bottom:2px solid #eeeeee;
  }
  .newTitle{
    width: 690px;
    height: 61px;
    margin :20px 0;
    position relative;
    background-image :url("./../assets/image/头条.png");
    background-repeat no-repeat;
    background-size :100% 100%;
  }
  .myselect{ width: 200px;margin:0 auto;}
  .el-select-dropdown__item { font-size:18px;text-align center}
  .morenew{
    width: 16 px;
    height: 28 px;
    position absolute;
    right :0;
    top:10px;
    background-image :url("./../assets/image/morenew.png");
    background-repeat no-repeat;
    background-size :100% 100%;
  }
  .liss{margin :0 30px; text-align:left;list-style :circle;line-height 90px;font-size 24px }

</style>
