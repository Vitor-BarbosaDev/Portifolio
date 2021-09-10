//Botão de voltar ao topo
window.onscroll = function() {
	scroll()
}

function scroll() {
	let btn = document.getElementById('btnTopo')
		if (document.documentElement.scrollTop > 50) {
			btn.style.display = 'flex'

		}else {
			btn.style.display = 'none'
	}
}

function backToTop() {
	document.documentElement.scrollTop = 0
}

//Efeito maquina de escrever			

function escreva(elemento) {
	const textoArray = elemento.innerHTML.split('')
	elemento.innerHTML = ''
	textoArray.forEach((letra, i) => {
		setTimeout(() =>
		 elemento.innerHTML += letra, 90 * i)
	})

}
const titulo = document.getElementById('txtMaquina')
escreva(titulo)
