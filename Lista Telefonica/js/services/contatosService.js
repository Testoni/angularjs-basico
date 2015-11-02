angular.module("listaTelefonica").factory("Contatos", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "http://localhost:8080/contatos");
	};

	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "http://localhost:8080/contatos", contato);
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	}
});