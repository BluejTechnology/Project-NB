import shareData from '@/data/shareData.json';
import { mapState } from "vuex";
export default {
    methods:{
        async updateDesc(){
            window.image_url =shareData[`type${this.shareType}`].image_url  ;
            window.desc = shareData[`type${this.shareType}`].desc;
            window.title = shareData[`type${this.shareType}`].title;
            window.src_iconUrl = shareData[`type${this.shareType}`].src_iconUrl
            window.sourceName = shareData[`type${this.shareType}`].sourceName;
        }
    },
    computed:{
        ...mapState({
            shareType: state => state.type
          })
    }
}