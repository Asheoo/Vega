const app1=Vue.createApp({
     
     data(){
     return{
          quotes:[
                         {
                              text:"Happiness is good health and a bad memory",
                               name:"Ingrid Bergman"},
                         { 
                             text:"Tvrd je orah vocka cudnovata, ne slomi ga, ali zube polomi",
                              name:"Petar Petrovic Njegos"},
                         {
                             text:"Dan života vredi više od brda zlata",
                              name:"Josida Kenko"},
          ]
     }
},
          methods:{
               funk:
               function dquote(){
                    var quotes=dquote; 
                             
               
                    var dquote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
               }
          }
          

})
app1.mount("#main");

const app2=Vue.createApp({
    
          methods: {
               currentDate() {
                 const current = new Date();
                 const date = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;
                 return date;
               }
             }
          
     })
          
          app2.mount("#day")





const app3=Vue.createApp({
     data(){
          return{
             todo:[
                  {bla:"Pick up drycleaning"},
                  {bla:"Study for exam"},
                  {bla:"Drink beer"},
             ]
          }
      },
})
app3.mount("#str")






const app4=Vue.createApp({


          data(){
               return{
                   showModal:false,
                   
               }
          },
          methods:{
               modalAction(){
                    if(this.showModal==false){
                         this.showModal=true
                    } else{
                         this.showModal=false
                    }

               }
               
               
          
          }
})
app4.mount("#pop")