(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroEstadoController', CadastroEstadoController);


    //PdAlertService
    function CadastroEstadoController($scope, EstadoService) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();

        activate();

        function activate() {

        }


        // function salvar() {
        //
        //     if ($scope.formProduto.$invalid) {
        //         angular.forEach($scope.formProduto.$error, function (errorField) {
        //             for (var i = 0; i < errorField.length; i++) {
        //                 errorField[i].$setTouched();
        //             }
        //         });
        //
        //         PdAlertService.showError('Verifique os campos inválidos');
        //         return;
        //     }
        //
        //     var entidadeAux = vm.entidade;
        //
        //     excluir(vm.entidade);
        //
        //     $rootScope.listaProdutos.push(entidadeAux);
        //
        //     PdAlertService.showSuccess('Produto Cadastrado com Sucesso!');
        //
        //     limpar();
        //
        //     $state.go('pesquisaProduto');
        // }
        //
        // function excluir(entidade) {
        //     var index = $rootScope.listaProdutos.indexOf(entidade);
        //
        //     $rootScope.listaProdutos.splice(index,1);
        // }

    }

})();

