<template>
  <div class="upload">
    <input type="file" accept="image/*" name @change="fileChange" id />
    <h3>图片展示</h3>
    <div class="showBox">
      <img :src="avatar" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: null,
    };
  },
  created() {
    
  },
  methods: {
    getUploadUrl() {
      // -----第一步获取图片上传接口
        return this.axios({
            method: "POST",
            url: '/fcgi/gwlogout/GetTencentCloudInfo',
            data: { 
              BIZID: "QZ" ,
              File : parseInt(Math.random()*100000).toString()
          }
        }).then(res => {
            window.console.log(res.data);
            return res.data
        })
    },
    async uploadImg(data){
        // 第二步上传图片
        let json = { BizID: "QZ" , Type: 2, File: data.CDNUrl };
        let uploadpicResult = await this.axios({
            url:'/fcgi/gw/uploadpic',
            data:json,
            method: "POST",
        }).then(res=>{
            window.console.log(res);
            return res
        });

        let sign = data.Sign;
        let reg = new RegExp(/(\w+):\/\/([^/:]+)(:\d*)?/);
        let api = sign.match(reg)[0];
        // window.console.log(api,uploadpicResult)
        let signData = await this.axios({
              method:"PUT",
              url:api,
              data:{
                reader : this.avatar
              }
          }).then(res=>{
              return res
          });
          
        return signData
    },
    imgVerify(){
        // 第三步鉴黄
    },
    fileChange(e) {
        // window.console.log(e.target.files[0])
        let file = e.target.files[0];
        var reader = new FileReader();
        var that = this;
        reader.readAsDataURL(file);
        reader.onload = async function() {
            that.vatar = this.result;// 二进制流渲染图片
    //   --------上传图片换取真实cdn--------
            let result1 = await that.getUploadUrl();
            let result2 = await that.uploadImg(result1);
            let result3 = await that.imgVerify(result2);

    //   --------------------------

        };
    }
  }
};
</script>

<style lang="scss" scoped>
.showBox {
  font-size: 0;
  border: 1px solid black;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  img {
    width: 90%;
  }
}
</style>