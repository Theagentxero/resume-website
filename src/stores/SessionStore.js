import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useSessionStore = defineStore('session', {
    state: () => ({
        sessionID: null
    }),
    getters: {
        
    },
    actions: {
        setup(){
            // Check for existing session id cookie
            var existingSessionID = null
            document.cookie.split(';').forEach((rawCookie)=>{
                let parts = rawCookie.split("=");
                if(parts[0] == "ht_session_id"){
                    existingSessionID = parts[1];
                }
            })
            if(existingSessionID != null){
                // Use the exsisting session id
                this.sessionID = existingSessionID;
            }else{
                // If no cookie exists, then we will create one.
                this.sessionID = nanoid();
                document.cookie = `ht_session_id=${this.sessionID}; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax;`
            }
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6R550NLXLT', {
                'sessionID': `${this.sessionID}`
            });
        }
    },
})