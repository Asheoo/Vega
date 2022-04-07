<template>
        <transition name="fade">
            <div class="modal-wrap" >
                <div class="modal" >
                    <h2>Create a task today:</h2>
                    <form action >
                        <div class="field-wrap">
                            <input v-model="task" class="field" type="text" placeholder="Title..">
                        </div>
                        <div class="btn-wrap" >
                            <input @click.prevent="$emit('close')" class="btn" type="submit" value="Create">
                        </div>
                    </form>
                </div>
            </div>
        </transition> 
               
</template>

<script>
    export default ({
        name:'modal',
        emits:'close',
    });
</script>

<style>
.modal-wrap{
    display: flex;
	visibility: show;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	transition: 350ms ease-in-out;
	opacity: 1;
	background-color: rgba(0, 0, 0, 0.7);
}

.modal{
    position: absolute;
	width: 100%;
	max-width: 700px;
	padding: 50px 40px;
	background-color: #fff;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}

/*.showModal {
	visibility: visible;
	opacity: 1;
}
*/
.btn{
    padding: 15px 35px;
	transition: 350ms ease-in-out;
	background-color: #ed5928;
	color: #fff;
	font-size: 25px;
	font-weight: 300;
    border: 0;
}

.btn-wrap{
    text-align: right;
}

.btn:hover {
	background-color: #d3431b;
}



.modal h2 {
	margin-top: 0;
	margin-bottom: 1em;
	color: #666;
	font-size: 30px;
	font-weight: 300;
}

.field-wrap {
	margin: 20px 0 40px;
}

.field {
	display: block;
	box-sizing: border-box;
	width: 100%;
	padding: 15px;
    border: 0;
	border-bottom: 1px solid #999;
	color: #999;
	font-size: 26px;
    outline: none;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>