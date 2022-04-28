const app = new Vue({
    el:'#app',
    data:{
        chats:[
            {
                name: 'Michele',
                avatar: '1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
            
        ],
        filteredWord: '',
        activeIndex: 0,
        newMessage: '',
        risposte:[
            "Ma va' caghèr","Penso di si, ora controllo","Assolutamente no","Fantastico!","Mmmmm....non saprei, non credo....","Moglie e buoi dei paesi tuoi","Non ci sono più le mezze stagioni!","Si stava meglio quando si stava peggio...."
        ],
        check: false
    },
    methods:{
        viewLastDate(i){
            let newDate;
            if(this.chats[i].messages.length === 0){
                newDate = 'nononono'
            } else {
                let lastDate = this.chats[i].messages[this.chats[i].messages.length - 1].date;
                newDate = this.modifyDate(lastDate);
            }
            console.log('utente: ', this.chats[i].name, ', newDate: ', newDate)
            return newDate;
        },
        viewLastMessage(i){

            if(this.chats[i].messages.length === 0){
                return "";
            }

            let lastMsg = this.chats[i].messages[this.chats[i].messages.length - 1].message;

            return lastMsg;
        },
        modifyDate(data){
            //console.log(data)
            if(data === undefined){
                this.chats[this.activeIndex].visible = false;
                //console.log(this.chats[this.activeIndex].visible)
                return data = null;
            }
            this.chats[this.activeIndex].visible = true;
            let giornoOra = data.split(" ");
            let ora = giornoOra.find(e => e.includes(":"));
            let newTimeArray = ora.split(":");
            newTimeArray.splice(2);
            let newTime = newTimeArray.join(":");
            //console.log('newTime: ',newTime)
            return newTime;
        },
        myNewLocalTime(){
            let data = `${new Date()}`;
            const newDate = this.modifyDate(data)
            //console.log('sono le : ',newDate)
            return newDate;
        },
        getActiveIndex(i){
            this.activeIndex = i;
            //console.log('active index: ', this.activeIndex)
        },
        getLastReceived(){
            let ultimoMsg =  this.chats[this.activeIndex].messages[this.chats[this.activeIndex].messages.length - 1];

            if(ultimoMsg.status === 'received'){
                
                return 'Ultimo accesso oggi alle ' + this.modifyDate(ultimoMsg.date);
            } else {
                return 'Offline'
            }
        },
        pushMessage(){
            let now = `${new Date()}`;
            const newObj = {
                message: this.newMessage,
                date: now,
                status: 'sent'
            };
            this.chats[this.activeIndex].messages.push(newObj);
            this.newMessage = '';
            
            this.mettiInCima(this.chats[this.activeIndex], this.chats)
            //console.log('ancora active indx: ',this.activeIndex)
            //console.log('ultimatum: ',this.chats)
            
            setTimeout(this.randomAnswer, 1000);
        },
        randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        randomAnswer(){
            let now = `${new Date()}`;
            const newObj = {
                message: `${this.risposte[this.randomInteger(0, this.risposte.length)]}`,
                date: now,
                status: 'received'
            };
            this.chats[this.activeIndex].messages.push(newObj);

        },
        filtraNome(chat){
            if(chat.name.toLowerCase().includes(this.filteredWord.toLowerCase())){
                return true;
            }
        },
        addContatori(){
            let x = 0;
            this.chats.forEach((chat) => {
                chat.contatore = x;
                x++;
            })
            //console.log('contatori aggiunti: ',this.chats)
        },
        mettiInCima(oggetto, array){
            //console.log('obj: ',oggetto)
            //console.log('array: ',array)
            array.sort( function (a) {
                if (a === oggetto){
                    return -1;
                }
            })
            this.activeIndex = 0;
            //console.log('nuovoarray',array)
            return array;
        },
        eliminaMsg(i){
            console.log(i)
            /*let myArray = this.chats[this.activeIndex].messages;
            const msg = myArray[i];
            console.log(myArray)
            console.log(msg)
            // boh, guardo quanti received ci sono
            let numeriRicevuti = [];
            myArray.forEach((msg)=>{
                if(msg.status === 'received'){
                    numeriRicevuti.push(msg)
                }
            })*/
            // console.log('numeriricevuti, ', numeriRicevuti)
            //boh
            /*if(numeriRicevuti.length === 1){
                console.log('splice');
                myArray.splice(i, 1)
            } else {
                myArray.splice(i, 1)
            }*/

            this.chats[this.activeIndex].messages.splice(i, 1);
        },
    },
    mounted(){
        //this.myNewLocalTime();
        //this.addContatori();
    }
})