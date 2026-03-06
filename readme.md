# 🌌 Warframe Codex Ultra

**Warframe Codex Ultra** is an interactive and responsive web application designed for Tennos who need quick access to vital information from the Origin System. The tool consumes the [WarframeStat.us](https://warframestat.us/) public API to provide real-time data on Warframes, Weapons, and Companions (Pets/Sentinels).

---

## 🚀 Features

* **Real-Time Search:** Search for any item using the official database.
* **Specialized Sections:**
    * **Warframes:** Details on Health, Shields, Armor, and Energy.
    * **Arsenal (Weapons):** Statistics for Total Damage, Critical Chance, Critical Multiplier, and Status.
    * **Companions:** Information regarding biological Pets and mechanical Sentinels.
* **Futuristic Interface:** "Dark Mode" thematic design inspired by the Lotus UI, featuring neon glows (Cyan and Gold), backdrop blurs, and smooth animations.
* **Smart Suggestions:** Uses `datalist` to suggest common search terms.
* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic structure for all pages.
* **CSS3:** Advanced styling using Flexbox, Grid, Keyframe Animations, and custom properties.
* **JavaScript (ES6+):** DOM manipulation and asynchronous requests using `fetch` and `async/await`.
* **External API:** [WarframeStat.us API](https://docs.warframestat.us/) - The source of truth for all item data.

---

## 📂 Project Structure

The project is modularized to ensure easy maintenance:

```text
├── index.html        # Main landing page (Warframe Codex)
├── weapons.html      # Weapons section
├── pets.html         # Companions section
├── style.css         # Global styling and shared thematic variables
├── script.js         # Search logic and rendering for Warframes
├── weapons.js        # Search logic and rendering for Weapons
└── pets.js           # Search logic and rendering for Pets/Sentinels

---

## ⚙️ How to Run

* **Clone this repository or download the source files.**

* **Ensure all files (.html, .css, .js) are in the same directory (or adjust import paths accordingly).**

* **Open index.html in any modern web browser.**

* **Type the name of an item (e.g., Excalibur, Soma Prime, or Carrier) and hit SEARCH.**