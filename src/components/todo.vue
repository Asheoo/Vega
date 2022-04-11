<template>
    <div class="main">

                <div id="str" class="container">
                    <div class="copy"  v-for="task in store.search" :key="task">
                        <label class="box" >
                            
                            <span class="task" >{{task.name}}</span>
                            <span class="checkbox">
                                <input class="checkbox-native" type="checkbox">
                                <span class="checkmark">
                                    <svg viewBox="0 0 24 24">
                                        <path class="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                    </svg>
                                </span>
                            </span>
                            
                        </label>
                    </div>
                 </div> 
            </div> 
</template>

<script>
    import store from "../store";
    
    export default {
        name:'todo',
        
        data(){
          return{
              
             
             store:store,
             /*todo:[
                  {bla:"Pick up drycleaning"},
                  {bla:"Study for exam"},
                  {bla:"Drink beer"},
             ],*/
          }
          
      },
      
     
      
      

    }
</script>

<style>
.main{
    display: block;
	padding: 20px 0;
}

.copy{
    margin: 20px 0;
}

.box{
    
    display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	transition: 350ms ease-in-out;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
	cursor: pointer;
}

.box:hover{
    background-color: #f9f9f9;
}

.task{
    color: #666;
	font-size: 25px;
	font-weight: 300;
}

.checkbox-native{
    display: none;
}

.checkmark {
	display: block;
	position: relative;
	flex-shrink: 0;
	width: 28px;
	height: 28px;
	padding: 3px;
	transition: 350ms ease-in-out;
	border: 2px solid #999;
	border-radius: 3px;
}

.checkbox-native:checked + .checkmark {
	border-color: #ed5928;
	background-color: #ed5928;
}

.checkbox-native:checked + .checkmark .checkmark-icon {
	stroke-dashoffset: 0;
}

.checkmark .checkmark-icon {
	transition: 350ms ease-in-out;
	stroke: white;
	stroke-width: 3px;
	stroke-dashoffset: 30;
	stroke-dasharray: 30;
}


</style>