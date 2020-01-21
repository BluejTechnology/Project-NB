import shareData from '@/data/shareData.json';
import { mapState } from "vuex";
export default {
    mounted(){
        window.image_url =shareData[`type${shareType}`].image_url  ;
        window.desc = shareData[`type${shareType}`].desc;
    },
    methods:{

    },
    computed:{
        ...mapState({
            shareType: state => state.type
          })
    }
}