<template>
 	<div class="container">
         <button @click = 'show'>test</button>
    <nuxt-link class="button" :to="{ name: 'about'}">
          about page
    </nuxt-link>
 	</div>
</template>

<style scoped lang="less">
.container {
  .title
  {
    margin: 50px 0;
  }
}

</style>

<script>
    import indexApi from '~/util/client/http/index';

    export default {
        name: 'id',
        asyncData ({ params, error }) {
            return {test: 'index  '}
        },
        head () {
          return {
            title: `123`
          }
        },
        created() {
        },
        mounted() {
            // console.log(axios.jsonp);
            var a = indexApi.getMsg({
                crossdomain: true,
                gameCode: 'twxq',
                activityCode: 'preheat',
                loginTimestamp: '1514863133079',
                loginSign: '8DD69E9164652A40314F50D0F447F468',
                loginId: '1013208057',
                verifyCode: 'efunplatform'
            });
            a.then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        },
        data() {
          return {
          }
        },
        methods: {
            show(){
                console.log(34)
            }
        }
    }
</script>
