<template>
    <div>
        <input type="file" ref="uploadpic" />
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            a: 1
        };
    },

    methods:{
        async first_step(fileName){
            return axios
                    .post("/fcgi/gwlogout/GetTencentCloudInfo", {
                        BizID: "QZ",
                        File: fileName
                    }).then(res=>{
                        if (res.status !== 200 || !res.data) {
                            Promise.reject("请求第一步报错");
                        }
                        return res.data
                    })
        },
        async second_step(url,filecontent){
            return axios.put(url, filecontent).then(res => {
                if (res.status !== 200 ) {
                    Promise.reject("请求第二步报错");
                }
                return res.data
            })
        },
        async third_step(picUrl){
            return axios.post("/fcgi/gwlogout/ImgVerify", {
                    BIZID: "QZ",
                    ImgURL: picUrl
                }).then(res => {
                    if (res.status !== 200 || !res.data) {
                        Promise.reject("请求第三步报错");
                    }
                    return res.data
            })
        }
    },
    mounted() {
        this.$refs["uploadpic"].onchange = (e) => {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = async () => {
                try{
                    let filecontent = reader.result;
                    let res1 = await this.first_step(file.name)
                    let res2 = await this.second_step(res1.Sign,filecontent)
                    let res3 = await this.third_step(res1.CDNUrl)
                    console.log(res1,res2,res3)

                }catch(e){
                    console.log('报错拉！',e.message)
                }
            };
            reader.readAsArrayBuffer(file);
        };
    } 
};
</script>

<style lang="scss" scoped>
</style>