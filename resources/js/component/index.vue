<template>
    <div style="width:100vw; text-align:center;">
        <h3>Welcome to Home😍😍😍😍😍😍😍😍</h3>
        {{points}}
        <button class="btn btn-dark mx-3" @click.prevent="logout">Logout</button>
    </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const logout = () => {
     let res = axios
        .post("/api/logout")

        if(res.status == 200){
          router.push('/login')
        }
        // .then(() => {
        //   router.push({
        //    path:'/login'
        //   });
        // })
        // .catch((e) => {
        //  console.log(e)
        // });
    };


    return {
      logout,
    };
  },
  computed:{
   points(){
      return this.$store.state.count
   }
  }
};
</script>
