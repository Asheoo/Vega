<template>
    <div class="quote-block">
        <h1 class="quote">Happiness is good health and a bad memory</h1>
        <h2 class="name">- Ingrid Bergman</h2>
    </div>
</template>

<script>
    export default {
        name:'quote',
    }
</script>

<style>
    .quote-block{
    max-width: 520px;
	margin-left: auto;
	padding: 40px 0;
	text-align: right;
}
.quote{
  color: white;
  font-weight: 300;
  font-size: 46px;
  margin-top: 0;
  margin-bottom: 0.5em;  
}
.name{
    color: white;
    font-weight: 100;
    font-size: 30px;
    
}
</style>