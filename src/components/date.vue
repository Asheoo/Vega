<template>
    <div class="bg">
        <div class="container">
            <div class="wrap">
                <img class="logo" src="../assets/vegait-logo.svg" alt="Logo">
                <div id="day" class="date">
                                <img class="icon" src="../assets/icon-calendar.svg" alt="Calendar">
                        <h2>{{currentDate()}}</h2>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name:'date',

        methods:{
               currentDate() {
                 const current = new Date();
                 const date = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;
                 return date;
               }
             }
    }
    
</script>

<style>
.wrap{
    
        position: relative;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;      
}

.bg{
    background-color: rgba(211, 67, 27, 0.5);;
}

.date{
    display: flex;
    padding: 35px 0;
    align-items: center;
}

.date h2{
    display: block;
	margin-left: 40px;
	color: #fff;
	font-size: 23px;
	font-weight: 300;
}

.wrap .logo{
    position: absolute;
	top: 0;
	right: 70px;
	height: 100%;
	opacity: 0.1;
    
}

.icon{
   height: 25px;
   width: 25px;
    
}

.wrap .logo{
    position: absolute;
	top: 0;
	right: 70px;
	height: 100%;
	opacity: 0.1;
    
}

</style>