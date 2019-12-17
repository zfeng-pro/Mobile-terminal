<template>
    <div>
      <!--头部-->
      <div class="header">
        <p style="color: #fff">2017年福建乡镇公务员</p>
      </div>
      <div class="content">
        <ul class="listbg">
          <li class="newlist" v-for="item in list">
              <div class="head">
                <p class="new-telet"  >{{item.title}}</p>
                <span style="float: left;">北京精神病院666分院</span>
                <span>2019-09-09</span>
                <i style="color: #dc512f; float:right;">疯子</i>
              </div>

            <p class="news" >{{item.body}}</p>
          </li>
        </ul>
        <p @click="morenew" class="btn" >更多消息</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Article",
      data(){
        return{
          list:[],
          m :0
        }
      },
      created(){
        this.$axios.get('./../../static/txt.json')
          .then((res)=>{
            this.list = res.data.slice(0,1);
          }).catch(()=>{           //element 里的消息提示组件里面
          this.$message({
            showClose:true,
            message:'请求出错了',
            type:'error'
          })
        })
      },
      methods :{
        morenew (){
          this.m +=1;
          this.$axios.get('./../../static/txt.json')
            .then((res)=>{
              this.list = res.data.slice(this.m ,1+this.m);
            }).catch(()=>{           //element 里的消息提示组件里面
            this.$message({
              showClose:true,
              message:'请求出错了',
              type:'error'
            })
          });

        }
      }
    }
</script>

<style scoped>
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
  .content{
    width: 690px;
    margin: 0 30px;
  }
  .head{height: 160px; line-height: 80px; font-size: 28px;}
  .news{text-align: left;}
  .btn{ margin-top: 20px; font-size: 25px;color: #666;}
  .new-telet{ margin: 0;font-size: 28px;}
</style>
