<template>
    <div class="quote-block">
        <h1 class="quote">{{chosenPick.quotes}}</h1>
        <h2 class="name">- {{chosenPick.name}}</h2>
    </div>
</template>

<script>
    export default {
        name:'quote',
        created(){
            this.picker()
        },
        data(){
            return{
                list:[
            {
                quotes:'Happines is good health and a bad memory',
                name:'Ingrid Bergman'
            },
            {
                quotes:'Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.',
                name:'Herijet Bičer Stou'
            },
            {
                quotes:'Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.',
                name:'Ajn Rand'
            },
            {
                quotes:'Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.',
                name:'Jovan Dučić'
            },
            {
                quotes:'Preko noći postaje slavan samo onaj ko je danima neumorno radio.',
                name:'Henri Ford'
            },
            {
                quotes:'Bez muke se pesma ne ispoja, bez muke se sablja ne sakova!',
                name:'Petar Petrović Njegoš'
            },
            {
                quotes:'Izgleda nemoguće, dokle god se ne završi.',
                name:'Nelson Mandela'
            }

        ],
        chosenPick:{}
            }},

        methods:{
            picker: function(){
                var chosenNumber=Math.floor(Math.random()*this.list.length);
                this.chosenPick=this.list[chosenNumber];
            }
        }
        
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