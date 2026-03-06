async function searchWeapon() {
  const input = document.getElementById("wfInput").value.trim();
  const statusMsg = document.getElementById("status-msg");
  const resultContainer = document.getElementById("result-container");

  if (!input) return;

  statusMsg.innerHTML = "Acessando o Arsenal de Cephalon Simaris...";
  resultContainer.style.display = "none";

  try {
    const response = await fetch(
      `https://api.warframestat.us/items/search/${input}`,
    );
    const data = await response.json();
    const weaponCategories = [
      "Primary",
      "Secondary",
      "Melee",
      "Arch-Gun",
      "Arch-Melee",
    ];
    const result = data.find((i) => weaponCategories.includes(i.category));

    if (result) {
      displayWeapon(result);
      statusMsg.innerText = "";
    } else {
      statusMsg.innerText = "Arma não encontrada no banco de dados.";
    }
  } catch (error) {
    statusMsg.innerText = "Erro na sincronização com o banco de dados.";
  }
}

function displayWeapon(wp) {
  const container = document.getElementById("result-container");
  const imgElement = document.getElementById("wf-image");
  const baseImgUrl = "https://cdn.warframestat.us/img/";
  const imgPath = wp.wikiaThumbnail || (wp.imageName ? `${baseImgUrl}${wp.imageName}` : "");
  imgElement.src = imgPath;

  document.getElementById("wf-name").innerText = wp.name;
  document.getElementById("wf-type").innerText = wp.type || "Arma";
  document.getElementById("wf-desc").innerText = wp.description || "Especificações confidenciais.";

  document.getElementById("stat-damage").innerText =
    wp.totalDamage || wp.damage || "--";

  const critChance = wp.criticalChance
    ? `${(wp.criticalChance * 100).toFixed(1)}%`
    : "--";
  const statusChance = wp.procChance
    ? `${(wp.procChance * 100).toFixed(1)}%`
    : "--";

  document.getElementById("stat-crit").innerText = critChance;
  document.getElementById("stat-multiplier").innerText = wp.criticalMultiplier
    ? `${wp.criticalMultiplier}x`
    : "--";
  document.getElementById("stat-status").innerText = statusChance;

  container.style.display = "block";
}


document.getElementById("searchBtn").addEventListener("click", searchWeapon);
document.getElementById("wfInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchWeapon();
});