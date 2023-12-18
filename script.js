/*
-- MILESTONE 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

-- MILESTONE 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

-- MILESTONE 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

-- MILESTONE 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

-- MILESTONE 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
*/


const { createApp } = Vue;
const { DateTime } = luxon; //Dichiarazione libreria Luxon

createApp({
    data() {
        return {
            darkMode: false,
            splashPage: true,
            newMessage: '',
            searchQuery: '',
            activeChat: ({
                name: '',
                avatar: '',
                messages: []
            }),
            // chats: ['Michele', 'img/avatar_1.jpg'],
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
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
                    avatar: 'img/avatar_2.jpg',
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
                    avatar: 'img/avatar_3.jpg',
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
                    avatar: 'img/avatar_4.jpg',
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
                    avatar: 'img/avatar_5.jpg',
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
                    avatar: 'img/avatar_6.jpg',
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
                    avatar: 'img/avatar_7.jpg',
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
                    avatar: 'img/avatar_8.jpg',
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
            ]
        }
    },
    /*
    In Vue.js, computed è una sezione in cui è possibile definire delle proprietà calcolate. Le proprietà calcolate sono dipendenti da una o più proprietà reattive, e vengono ricalcolate automaticamente ogni volta che una delle dipendenze cambia. Questo è particolarmente utile quando si desidera ottenere un valore derivato da altri dati reattivi, e si vuole che Vue gestisca automaticamente l'aggiornamento quando le dipendenze cambiano.
    */
    computed: {
        // Filtra i contatti in base alla query di ricerca
        filteredContacts() {
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        filteredContactsShowLastMsgAndDate() {
            /*
            map è una funzione di array che viene utilizzata per creare un nuovo array contenente i risultati di chiamate di una funzione su ogni elemento dell'array originale. La funzione di callback fornita a map viene chiamata una volta per ogni elemento dell'array, in ordine, e il risultato di ciascuna chiamata viene utilizzato per costruire il nuovo array.
            */
            return this.filteredContacts.map(currentContact => {
                const lastMsg = currentContact.messages[currentContact.messages.length - 1];
                return {
                    //Clono l'obj contact (...)
                    ...currentContact,
                    lastMsgText: lastMsg ? lastMsg.message : '',
                    lastMsgDate: lastMsg ? lastMsg.date : '',
                }
            })
        }
    },
    methods: {
        currentChat(index) {    //Milestone 2
            // this.chats.splice(0, 1, this.contacts[index].name);
            // this.chats.splice(1, 1);
            // this.chats.push(this.contacts[index].avatar);
            this.activeChat = {
                name: this.contacts[index].name,
                avatar: this.contacts[index].avatar,
                messages: this.contacts[index].messages,
            };
        },
        addMessage() { //Milestone 3

            //The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
            if (this.newMessage.trim() !== '') {
                const newMsg = {
                    date: new Date().toLocaleString(),
                    message: this.newMessage,
                    status: 'sent',
                };

                // Aggiungo il nuovo messaggio all'interno di activeChat, ovvero i dati forniti prima per ogni chat (nome, foto e messaggi)
                this.activeChat.messages.push(newMsg);

                // Pulisco l'input dopo che il messaggio e' stato inviato
                this.newMessage = '';

                // Simulazione della risposta dopo il delay
                setTimeout(() => {
                    // Effettua una richiesta HTTP all'API Quotable
                    axios.get('https://api.quotable.io/random')
                        .then(risposta => {
                            const randomQuote = risposta.data.content;

                            // Aggiungi la citazione come messaggio ricevuto
                            this.activeChat.messages.push({
                                message: randomQuote,
                                status: 'received',
                                date: new Date().toLocaleString('it-IT') // Aggiungi la data corrente formattata secondo l'orario italiano
                            });
                        })
                }, 1000);
            }
        },
        hideSplashPage() { //Splash Page setup
            setTimeout(() => {
                //La reimposto su false per nasconderla
                this.splashPage = false;
            }, 1500);
        },
        putDarkMode() { //Dark Mode setup
            this.darkMode = !this.darkMode;
            const wrapper = document.getElementById('wrapper');
            //toggle Se la classe e' gia' esistente la rimuovo e viceversa
            wrapper.classList.toggle('dark-mode', this.darkMode);
        },
        currentTimeOnMsg() {
            const currentHour = DateTime.local().hour;
            const currentMinutes = DateTime.local().minute;
            return `${currentHour} : ${currentMinutes}`;
        }

    },
    mounted() { //Richiamo la funzione nel mounted per far sparire la splash page
        this.hideSplashPage();
    }
}).mount("#app");