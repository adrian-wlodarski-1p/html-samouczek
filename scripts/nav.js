const svg = `<svg width="40" height="40">
			  <polyline points="12,8 27,20 12,32" style="fill:none;stroke-width:2;stroke:black;" />
			</svg>`;

let text = `
		<ul>
          <li><a href="../index.html">Strona główna</a></li>
          <li><a href="#" class="lst">Podstawy
		    ${svg}</a>
            <ul>
              <li><a href="./wprowadzenie.html">Wprowadzenie</a></li>
              <li><a href="#">Struktura strony</a></li>
              <li><a href="#">Znaczniki formatowania</a></li>
              <li><a href="#">Odnośniki i obrazy</a></li>
              <li><a href="#">Listy</a></li>
              <li><a href="#">Tabele</a></li>
              <li><a href="#"><code>&lt;meta&gt;</code>, <code>&lt;div&gt;</code> i <code>&lt;span&gt;</code></a></li>
            </ul>
          </li>
          <li><a href="#" class="lst">Style
			${svg}</a>
            <ul>
              <li><a href="#">Wprowadzenie do CSS</a></li>
              <li><a href="#">Podstawy CSS</a></li>
              <li><a href="#">Podstawowe właściwości</a></li>
              <li><a href="#">Formatowanie tekstu</a></li>
              <li><a href="#">Jednostki</a></li>
              <li><a href="#">Formatowanie list</a></li>
              <li><a href="#">Selektory</a></li>
            </ul>
          </li>
		  <li><a href="#" class="lst">Złożone strony
		    ${svg}</a>
            <ul>
              <li><a href="#">Menu poziome i pionowe</a></li>
              <li><a href="#">Pozycjonowanie</a></li>
              <li><a href="#">Podstawowe właściwości</a></li>
              <li><a href="#">Formatowanie tekstu</a></li>
              <li><a href="#">Jednostki</a></li>
              <li><a href="#">Formatowanie list</a></li>
              <li><a href="#">Selektory</a></li>
            </ul>
          </li>
		  <li><a href="#" class="lst">Zaawansowane
		    ${svg}</a>
			<ul>
			  <li><a href="#">Animacje</a></li>
			  <li><a href="#">Gradienty</a></li>
			  <li><a href="#">Audio i wideo</a></li>
			  <li><a href="#">Mapy odsyłaczy</a></li>
			  <li><a href="#">Rysunki SVG</a></li>
			</ul>
		  </li>
		  <li><a href="./materialy.html">Materiały</a></li>
		  <li><a href="#" id="omnie">O mnie</a></li>
        </ul>
`
console.log(window.is_this_file_the_main_page);
if (typeof window.is_this_file_the_main_page !== "undefined") {
	text = text.replace("../index.html","#");
	text = text.replaceAll(`"./`,`"./src/`);
}
document.getElementsByTagName("nav")[0].innerHTML = text;

let lst = document.getElementsByClassName("lst");
for(let i=0; i < lst.length; i++) {
	lst[i].addEventListener('click', function (e) {
		e.preventDefault();
		/*if(window.innerWidth < 700)*/
			lst[i].parentElement.querySelector("ul").classList.toggle("open");
	});
}
