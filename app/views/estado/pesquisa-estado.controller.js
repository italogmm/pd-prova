(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaEstadoController', PesquisaEstadoController);


    //PdAlertService
    function PesquisaEstadoController(EstadoService,$scope,$state) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();


        vm.listaProdutos = vm.pdService.data;

        vm.gridOptions = {
            data: 'listaProdutos',
            enableColumnMenus: false,
            enableRowSelection:false,
            columnDefs: [
                {name: 'Nome', field: 'nome'},
                {
                    name: '', field: 'excluir', width: 120,
                    cellTemplate: 'arquitetura/template/cell-template-botoes.html',
                    onClick:editar,
                    onClickExcluir: excluir
                }
            ]
        };

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

