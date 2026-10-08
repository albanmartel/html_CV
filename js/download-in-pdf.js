async function telechargerPDF() {
    // 1. Cibler l'élément à exporter
    const element = document.getElementById("contenu_html");

    if (!element) {
        console.error("L'élément #contenu_html n'a pas été trouvé dans le DOM.");
        return;
    }

    // 2. Définir les options du PDF
    const options = {
        margin: 10, // Marges en mm
        filename: "mon-document.pdf", // Nom du fichier téléchargé
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 }, // Améliore la résolution du rendu
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    console.log("Génération du PDF en cours...");

    // 3. Générer et télécharger
    try {
        await html2pdf().set(options).from(element).save();
        console.log("PDF généré avec succès !");
    } catch (error) {
        console.error("Erreur lors de la génération du PDF :", error);
    }
}
