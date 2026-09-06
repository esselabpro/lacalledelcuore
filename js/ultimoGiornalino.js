// ATTENZIONE PROPRIETA' PRIVATA LA CALLE DEL CUORE //

function apriGiornalinoAttuale() {
    //const dataOdierna = new Date();
    // Crea una data basata specificamente sul fuso orario di Roma/Italia
    const dataItaliana = new Date().toLocaleString("en-US", { timeZone: "Europe/Rome" });
    const dataOdierna = new Date(dataItaliana); // si aggiorna da sola l'ora solare/legale
    console.log("Data e ora in Italia: ", dataOdierna)
    const numeroAnno = dataOdierna.getFullYear();
    let numeroMese = dataOdierna.getMonth() + 1; // Gennaio = 1, Febbraio = 2, ecc.
    if (numeroMese < 10) numeroMese = "0" + numeroMese;
    //const numeroMese = "9"; // solo per prove poi mettere a commento e scommentare la riga sopra
    
    // Preparo la stringa che sarà il file in base al mese corrente 
    let nomeFile = "";
    nomeFile = "giornalino_" + numeroAnno + "_" + numeroMese + ".pdf";
 
    // Aggiunge il timestamp anti-cache per evitare che i dispositivi aprano la versione vecchia
    const timestamp = new Date().getTime();
    const urlFinale = `assets/archivio_giornalini/${nomeFile}?v=${timestamp}`;

    window.open(urlFinale, '_blank'); // '_blank' significa apri il link in una nuova scheda
}

/*
// Se dovessi chiedere un'ora certificata per altri progetti dove l'utente non possa barare modificando
// volutamente l'ora o la data del proprio dispositvo per avere vantaggio per l'iscrizione a concorsi o
// gare o semplicemente offerte promozionali a esaurimento, ecc. userei un approccio simile al seguente:
async function apriGiornalinoAttuale() { // CON ORARIO CERTIFICATO
    try {
        // 1. Interroghiamo un server esterno per avere l'ora esatta italiana
        const risposta = await fetch('https://worldtimeapi.org/api/timezone/Europe/Rome');
        
        // Se la chiamata fallisce, gestiamo l'errore
        if (!risposta.ok) {
            throw new Error("Impossibile contattare il server dell'ora esatta.");
        }
        
        const datiOrario = await risposta.json();
        
        // 2. Il server restituisce una stringa con la data/ora ISO (es. "2026-08-03T11:00:00+02:00")
        // Estraiamo la data direttamente da lì
        const dataServer = new Date(datiOrario.datetime);
        
        const numeroAnno = dataServer.getFullYear();
        const numeroMese = dataServer.getMonth() + 1;
        
        // 3. Procediamo come prima con il nome del file e l'apertura
        let nomeFile = `ultimo_giornalino_${numeroAnno}_${numeroMese}.pdf`;
        const timestamp = new Date().getTime();
        const urlFinale = `assets/archivio/${nomeFile}?v=${timestamp}`;

        window.open(urlFinale, '_blank');

    } catch (errore) {
        console.error("Errore nel recupero dell'ora di rete:", errore);
        alert("Impossibile verificare l'orario di rete. Controlla la connessione a internet.");
    }
}
*/