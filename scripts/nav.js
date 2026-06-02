let text = `
		<ul>
          <li><a href="../index.html">Strona główna</a></li>
          <li><a href="./wprowadzenie.html">Wprowadzenie</a></li>
          <li><a href="./style.html">Style</a></li>
          <li><a href="./formatowanie.html">Formatowanie</a></li>
          <li><a href="./odnosniki.html">Odnośniki</a></li>
          <li><a href="./listy.html">Listy</a></li>
          <li><a href="./tabele.html">Tabele</a></li>
          <li><a href="./pozycjonowanie.html">Pozycjonowanie</a></li>
		  <li><a href="./formularze.html">Formularze</a></li>
		  <li><a href="./zaawansowane.html">Zaawansowane</a></li>
		  <li><a href="./materialy.html">Materiały</a></li>
        </ul>
`
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
