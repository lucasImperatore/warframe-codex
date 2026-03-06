

async function searchWarframe() {
    const input = document.getElementById("wfInput").value.trim();
    const statusMsg = document.getElementById("status-msg");
    const resultContainer = document.getElementById("result-container");

    if (!input) return;

    statusMsg.innerHTML = "Sincronizando com a rede da Lotus...";
    resultContainer.style.display = "none";

    try {
    const response = await fetch( `https://api.warframestat.us/items/search/${input}`,
);
    const data = await response.json();
    const result = data.find((i) => i.category === "Warframes");

    if (result) {
        displayWarframe(result);
        statusMsg.innerText = "";
    } else {
        statusMsg.innerText = "Warframe não encontrado no banco de dados.";
        }
    } catch (error) {
        statusMsg.innerText = "Erro na conexão com o servidor.";
    }
}

function displayWarframe(wf) {
    const container = document.getElementById("result-container");
    const imgElement = document.getElementById("wf-image");
    const imgPath = wf.wikiaThumbnail || (wf.imageName ? `https://cdn.warframestat.us/img/${wf.imageName}` : "");

imgElement.src = imgPath;
    document.getElementById("wf-name").innerText = wf.name;
    document.getElementById("wf-type").innerText = wf.type || "Warframe";
    document.getElementById("wf-desc").innerText = wf.description || "Descrição não disponível.";

    document.getElementById("stat-health").innerText = wf.health || "--";
    document.getElementById("stat-shield").innerText = wf.shield || "--";
    document.getElementById("stat-armor").innerText = wf.armor || "--";
    document.getElementById("stat-energy").innerText = wf.power || "--";

    container.style.display = "block";
}

document.getElementById("searchBtn").addEventListener("click", searchWarframe);
document.getElementById("wfInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchWarframe();
});