angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, Contatos, Operadoras, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	/*$scope.contatos = [
		{
			nome: $filter('uppercase')('Pedro'),
			telefone: "99987555", 
			data: new Date(), 
			cor: 'blue', 
			operadora: {nome: 'Oi', codigo: 14, categoria: 'Celular'}
		},
		{
			nome: "Ana", 
			telefone: "65165165", 
			data: new Date(), 
			cor: 'yellow'
		},
		{
			nome: "Maria", 
			telefone: "11544666", 
			data: new Date(), 
			cor: 'red'
		}
	];
	$scope.operadoras = [
		{
			nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2
		},
		{
			nome: 'Vivo', codigo: 15, categoria: 'Celular', preco: 3
		},
		{
			nome: 'Tim', codigo: 41, categoria: 'Celular', preco: 4
		},
		{
			nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 1
		}
	];*/

	var carregarContatos = function () {
		Contatos.getContatos().success(function (data, status) {
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.error = 'Não foi possível carregar os dados';
		});
	}

	var carregarOperadoras = function () {
		Operadoras.getOperadoras().sucess(function (data) {
			$scope.operadoras = data;
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		Contatos.saveContato(contato).success(function (data) {
			$scope.contatos.push(angular.copy(contato));
			delete $scope.contato;
			$scope.contatoForm.$setPristine() = true;
			//carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	//carregarContatos();
	//carregarOperadoras();
});