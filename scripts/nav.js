const svg = `<svg width="40" height="40">
			  <polyline points="12,8 27,20 12,32" style="fill:none;stroke-width:2;stroke:black;" />
			</svg>`;

let text = `
		<ul>
          <li><a href="../index.html">Strona główna</a></li>
          <li><a href="#">Podstawy
		    ${svg}</a>
            <ul>
              <li><a href="./podstawowe_terminy.html">Podstawowe terminy</a></li>
              <li><a href="#">Struktura strony</a></li>
              <li><a href="#">Znaczniki formatowania</a></li>
              <li><a href="#">Odnośniki i obrazy</a></li>
              <li><a href="#">Listy</a></li>
              <li><a href="#">Tabele</a></li>
            </ul>
          </li>
          <li><a href="#">Style
			${svg}</a>
            <ul id="nr2">
              <li><a href="#">Wprowadzenie do CSS</a></li>
              <li><a href="#">Podstawy CSS</a></li>
              <li><a href="#">Podstawowe właściwości</a></li>
              <li><a href="#">Formatowanie tekstu</a></li>
              <li><a href="#">Jednostki</a></li>
              <li><a href="#">Formatowanie list</a></li>
              <li><a href="#">Selektory</a></li>
            </ul>
          </li>
		  <li><a href="#">Złożone strony
		    ${svg}</a>
            <ul id="nr3">
              <li><a href="#">Menu poziome i pionowe</a></li>
              <li><a href="#">Pozycjonowanie</a></li>
              <li><a href="#">Podstawowe właściwości</a></li>
              <li><a href="#">Formatowanie tekstu</a></li>
              <li><a href="#">Jednostki</a></li>
              <li><a href="#">Formatowanie list</a></li>
              <li><a href="#">Selektory</a></li>
            </ul>
          </li>
		  <li><a href="#">Zaawansowane
		    ${svg}</a>
			<ul id="nr4">
			  <li><a href="#">Animacje</a></li>
			  <li><a href="#">Gradienty</a></li>
			  <li><a href="#">Audio i wideo</a></li>
			  <li><a href="#">Mapy odsyłaczy</a></li>
			  <li><a href="#">Rysunki SVG</a></li>
			</ul>
		  </li>
		  <li><a href="#">Materiały</a></li>
		  <li><a href="#" id="omnie">O mnie</a></li>
        </ul>
`
const page = window.location.pathname;
if (page.includes("index.html")) {
	text = text.replace("../index.html","#");
	text = text.replaceAll(`"./`,`"./src/`);
}
document.getElementsByTagName("nav")[0].innerHTML = text;
