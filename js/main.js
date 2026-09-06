// ATTENZIONE PROPRIETA' PRIVATA LA CALLE DEL CUORE //

document.addEventListener("DOMContentLoaded", () => {
    // Controlliamo se siamo nella pagina della storia (se esiste l'elemento di render)
    const storiaContainer = document.getElementById("storia-render");

    if (storiaContainer) {
        // 1. JS va a leggere il file di testo .md (con protezione anti-cache!)
        fetch('data/storia.md?v=' + new Date().getTime())
            .then(response => {
                if (!response.ok) {
                    throw new Error("Impossibile caricare il file della storia");
                }
                return response.text();
            })
            .then(testoMarkdown => {
                // 2. Usiamo la libreria Marked per trasformare il testo in HTML puro
                // 3. Lo stampiamo dentro la pagina
                storiaContainer.innerHTML = marked.parse(testoMarkdown);
            })
            .catch(error => {
                console.error("Errore:", error);
                storiaContainer.innerHTML = "<p>Ci scusiamo, non è stato possibile caricare la storia in questo momento.</p>";
            });
    }
});