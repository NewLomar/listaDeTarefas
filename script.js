const lista_de_tarefas = {
	tarefas: ["Lavar a louça", "Levar o spyke para passear", "salvar o mundo"],

	editarTarefa: function(posicao, nova_tarefa) {
		this.tarefas[posicao] = nova_tarefa;
		this.mostrarTarefas();
	},

	removerTarefa: function(posicao) {
		this.tarefas.splice(posicao, 1);
		this.mostrarTarefas();
	},
}


mostrarTarefa = () => {
	const ol = document.querySelector("ol");
	ol.innerHTML = '';
	for (tarefa = 0; tarefa < lista_de_tarefas.tarefas.length; tarefa++) {
		const text = document.createTextNode(lista_de_tarefas.tarefas[tarefa]);
		const li = document.createElement("li");
		li.appendChild(text);
		ol.appendChild(li);
	}
}

adicionarTarefa = () => {
	const input = document.querySelector("input");
	const button = document.querySelector("button");
	button.addEventListener("click", () => {
		lista_de_tarefas.tarefas.push(input.value);
		mostrarTarefa();
	});
}

editarTarefa = () => {
	const input_posicao = document.getElementById("editar-posicao");
	const input_texto = document.getElementById("editar-texto");
	const button = document.getElementById("botao-editar");
	button.addEventListener("click", () => {
		console.log("hi");
		console.log(input_posicao, input_texto.value);
		lista_de_tarefas.tarefas[input_posicao.value - 1] = input_texto.value; 
		mostrarTarefa();
	});
}

mostrarTarefa();
adicionarTarefa();
editarTarefa();


