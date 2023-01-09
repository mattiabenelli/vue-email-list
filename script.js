const {createApp} = Vue

createApp({
    data() {
        return {
            mailArray: [],
            email: null,
        }
    },
    mounted() {
        for(let i = 0; i < 9; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            this.email = result.data.response
            this.mailArray.push(this.email)
        })
        }
    },
}).mount('#app')