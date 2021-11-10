Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        emails: [],
        timeElapsed: undefined
    },
    methods: {
        getEmails() {
            const url = 'https://flynn.boolean.careers/exercises/api/random/mail'
            
            // let initialTime = performance.now()
            
            this.emails = []

            // ripeto la API call per 10 volte
            for (let i = 0; i < 10; i++) {
                axios.get(url).then(res => {
                    const email = res.data.response
                    this.emails.push(email)
                })
            }

            // let finalTime = performance.now()

            // // calcolo quanto tempo ha impiegato il server per darmi tutte le risposte
            // this.timeElapsed = (finalTime - initialTime).toFixed(2)
        }
    }
})