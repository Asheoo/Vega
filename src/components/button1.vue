<template>
<div>

     <span class="button" >
                <img   class="icon icon-plus" src="../assets/icon-plus.svg" alt="Add New Item">
     </span>

     

</div>
     
</template>

<script>

export default ({
    name:"button1",
    
   

});
</script>

<style>
.button{
    position: relative;
    display: block;
    cursor: pointer;
    margin: 0 auto;
}

.button .icon{
    
        width: 45px;
        height: 45px;
        /*transform: scale(1);*/
        /*backface-visibility: hidden;*/
        transition: 350ms ease-in-out;   
}

.button .icon:hover{
    transform: scale(1.1);
}



</style>