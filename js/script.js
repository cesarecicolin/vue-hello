const { createApp } = Vue
const app = createApp({
    data(){
        return{
            message: "ciao a tutti",
            imgSrc:"img/formato-immagini-webp_710.jpg",
            imgCHad:"https://staticfanpage.akamaized.net/wp-content/uploads/sites/6/2021/11/gigachad-1200x675.jpg"
        }
    }
})
app.mount("#app")