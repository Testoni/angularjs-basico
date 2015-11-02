angular.module("listaTelefonica").service("Operadoras", function ($http, config) {
	this.getOperadoras = function () {
		return $http.get(config.baseUrl + "/operadoras");
	};
});