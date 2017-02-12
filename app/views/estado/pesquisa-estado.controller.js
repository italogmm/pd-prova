(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaEstadoController', PesquisaEstadoController);


    function PesquisaEstadoController(EstadoService,$scope,$state) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();



        activate();

        function activate() {
        }

        function pesquisaEstado() {

        }

        function editar(index) {
            $state.go('cadastroEstado', {id:index});
        }

        function excluir(index) {
            // TODO
        }
    }

})();

