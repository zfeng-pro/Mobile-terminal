<template>
  <div class="body2" >
    <!--头部-->
    <div class="header">
      <p>考试资讯</p>
      <div class="quan">全国<i class="qi"></i></div>
    </div>
    <!--tab切换-->
    <div>
      <ul class="nav">
        <li v-for="(item,index) of tablist"
            :class="{active: ind == index}"
            @click="clickTab(index)">{{item}}
        </li>
      </ul>
    </div>
    <!--置顶消息-->
    <div class="top-new">
      <div class="top-log"></div>
      <div class="news-title">2017年山东乡镇公务员考试公告</div>
      <div class="new-right"> 考试公告</div>
    </div>
    <!--滚动-->
    <div class="scroll-box">
      <ul class="new-ul">
        <li v-for="(item, index) in list" :key="index">
          <p class="nli">{{item.title}}</p>
        </li>
      </ul>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
    <!--底部-->
    <Foot/>
  </div>
</template>

<script>
  import Foot from './foot';
  // const api = './../../static/txt.json';
  import axios from 'axios';
  const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';
    export default {
        name: "List",
      components: {Foot},
      data(){
          return{
            tablist:['公告大纲','考试新闻','报考指导'],
            ind:0,
            page: 1,
            list:[
              {title:'2017重庆乡镇公务员考试公告'},
              {title:'2017河北乡镇公务员考试公告'},
              {title:'2017武汉乡镇公务员考试公告'},
              {title:'2017长沙乡镇公务员考试公告'},
              {title:'2017杭州乡镇公务员考试公告'},
              {title:'2017天津乡镇公务员考试公告'},
              ]
          }
      },
      methods: {
        //  tab切换
        clickTab(index){
          this.ind = index;
        },
        //无限滚动
        infiniteHandler($state) {
          axios.get(api, {
            params: {
              page: this.page,
            },
          }).then(({ data }) => {
            if (data.hits.length) {
              this.page += 1;
              this.list.push(...data.hits);
              console.log(data.hits);
              $state.loaded();
            } else {
              $state.complete();
            }
          });
        },
      },
    }
</script>

<style scoped lang="stylus">
   .body2{ width: 750px;}
   .header{
     padding: 70px 30px 30px 30px;
     width: 690px;
     height: 30px;
     text-align: center;
     position: relative;
     background-image: url("./../assets/imag2/header.png");
     background-repeat:no-repeat;
     background-size :100% 100%;
   }
  .quan{position: absolute;right: 35px;bottom: 15px;color: #fff;font-size: 25px}
  .qi{
    display: inline-block;
    width: 18px;
    height: 8px;
    background-image :url("./../assets/imag2/xia.png");
    background-repeat: no-repeat;
    background-size :100% 100%;
  }
  .active{color: deepskyblue;border-bottom: 2px solid deepskyblue;}
  .nav{width: 690;margin 0 30px; height: 88px;display flex;line-height 98px;color: #333;}
  .nav>li{flex 1;float:left;background-image :url("./../assets/imag2/s1.png");background-position :left center;background-repeat: no-repeat;}
  .top-new{width: 690;margin 0 30px; height: 90px;font-size 30px;border-bottom :8px solid #eee;}
  .top-log{
    width:48px;
    height: 32px;
    float: left;
    margin-top :40px;
    background-image :url("./../assets/imag2/ding.png");
    background-size :100% 100%;
    background-repeat: no-repeat;
  }
  .news-title{ float: left; width: 450px; height: 32px; margin:30px 0 0 10px;}
  .new-right{ width: 160px; height: 50px; margin-top :25px; float: right; border:1px solid deepskyblue; border-radius :5px; font-size : 25px; line-height:50px;}
  .scroll-box{
    width: 690px;
    margin-top :0 30px;
    height: 1050px;
    overflow scroll;
  }
//  .new-ul{ width: 100%; height: 100%;}
  .new-ul>li{
    /*height: 100px;*/
    width: 630px
    text-align :left;
    line-height :100px;
    margin-left:50px;
    list-style : circle;
    font-size :22px;
    background-image : url("./../assets/imag2/right.png");
    background-repeat: no-repeat;
    background-position :right center;
    background-size :12px 21px;

  }
  .nli{ width: 550px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
</style>
