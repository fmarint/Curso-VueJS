// console.log( Vue )

const app = Vue.createApp({
   data() {
      return {
         quote: "Los espejos aridos",
         author: "Fidel Marin"
      }
   },
   methods: {
      changeAuthor() {
         this.author = "Alexander"
         this.capitalize()
      },
      capitalize() {
         this.quote = this.quote.toUpperCase()
      }
   }
})

app.mount("#myApp")
