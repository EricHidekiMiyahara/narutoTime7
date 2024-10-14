const listaSelecaoNaruto = document.querySelectorAll(".naruto");

listaSelecaoNaruto.forEach(naruto => {
	naruto.addEventListener("click", () => {
		esconderCartaoNaruto();

		const idNarutoSelecionado = mostrarCartaoNarutoSelecionado(naruto);

		desativarNarutoNaListagem();
		ativarNarutoSelecionadoNaListagem(idNarutoSelecionado);

	})
})


function ativarNarutoSelecionadoNaListagem(idNarutoSelecionado) {
	const narutoSelecionadoNaListagem = document.getElementById(idNarutoSelecionado);
	narutoSelecionadoNaListagem.classList.add("ativo");
}

function desativarNarutoNaListagem() {
	const narutoAtivoNaListagem = document.querySelector(".ativo");
	narutoAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoNarutoSelecionado(naruto) {
	const idNarutoSelecionado = naruto.attributes.id.value;
	const idDoCartaoNarutoParaAbrir = "cartao-" + idNarutoSelecionado;
	const cartaoNarutoParaAbrir = document.getElementById(idDoCartaoNarutoParaAbrir);
	cartaoNarutoParaAbrir.classList.add("aberto");
	return idNarutoSelecionado;
}

function esconderCartaoNaruto() {
	const cartaoNarutoAberto = document.querySelector(".aberto");
	cartaoNarutoAberto.classList.remove("aberto");
}

