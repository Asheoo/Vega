<template>
    <div class="page">
        <modal v-show="showModal" @close="showModal=false" />
        <div class="img">
            <div class="container">

                <button1 @click="showModal=true"/>
                <quote/>

            </div>

                <date/>
                
        </div>
                <todo/>
                <foter/>
    </div>

</template>

<script>
    import button1 from "./button1.vue"
    import quote from "./quote.vue"
    import date from "./date.vue"
    import todo from "./todo.vue"
    import foter from "./footer.vue"
    import modal from "./modal.vue"


      export default {
        name:'page',
        components:{
            button1,
            quote,
            date,
            todo,
            foter,
            modal

        },
        data(){
               return{
                   showModal: false,
                   
               }
          },
          
    }

</script>

<style>
    .img{
    padding-top: 40px;
	background: #ed5928 url('../assets/images/header-bg.jpg') no-repeat left bottom;
	background-size: cover;
}
    .page{
        min-height: 100vh;
        flex: 1;
        display: flex;
        flex-direction: column;
}

.container{
    position: relative;
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	padding: 0 30px;
}
</style>