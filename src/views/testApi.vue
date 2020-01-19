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
    mounted() {
        this.$refs["uploadpic"].onchange = function(e) {
            let file = e.target.files[0];
            // console.log("file:", file);
            let reader = new FileReader();
            reader.onload = async () => {
                let filecontent = reader.result;
                // console.log("filecontent:", filecontent);
                let result = await axios
                    .post("/fcgi/gwlogout/GetTencentCloudInfo", {
                        BizID: "QZ",
                        File: file.name
                    })
                    .then(res => {
                        console.log("res:", res);
                        if (res.status !== 200 || !res.data) {
                            throw new Error("请求第二步报错");
                        }
    //                     let res= {
	// "Sign": "https://mvp-1300522992.cos.ap-chengdu.myqcloud.com/%2Factive_cny%2FQZ%2Ff2295a1c-605e-4e4f-af43-2d52d47d0bb3_1579442569137309550.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDZbXM0ZAHJI6nIcMJcswwnZF6nMn7rNMA%26q-sign-time%3D1579442569%3B1579444369%26q-key-time%3D1579442569%3B1579444369%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3D453002f069cf96603237fd589725b75a036c8d12",
	// "CDNUrl": "http://mvp-1300522992.image.myqcloud.com//active_cny/QZ/f2295a1c-605e-4e4f-af43-2d52d47d0bb3_1579442569137309550.jpg"
// }
                        res = res.data
                        let url = res.Sign
                        console.log(url)
                        axios.put(url, filecontent).then(res2 => {
                            console.log("res2:", res2);
                            axios
                                .post(
                                    "/fcgi/gwlogout/ImgVerify",
                                    {
                                        BIZID: "QZ",
                                        ImgURL: res.CDNUrl
                                    }
                                )
                                .then(res3 => {
                                    console.log("res3:", res3);

                                });
                        });
                    });
                console.log(result);
            };
            reader.readAsArrayBuffer(file);
        };
    }
};
</script>

<style lang="scss" scoped>
</style>