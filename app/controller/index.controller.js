(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('IndexController', IndexController);


    function IndexController($scope, $rootScope) {
        var vm = this;

        $rootScope.listaProdutos = [];

        vm.salvar = salvar;

        iniciar();

        function iniciar() {

        }

        function salvar(entidade) {
            console.log(entidade.nome);
        }
    }

})();

