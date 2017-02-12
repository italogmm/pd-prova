(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaBairroController', PesquisaBairroController);


    //PdAlertService
    function PesquisaBairroController($scope,$rootScope,$state,$stateParams) {
        var vm = this;
        vm.title = 'PesquisaBairroController';
        vm.entidade = {};

        vm.origem = [
            {valor: 'Interna', descricao: 'Interno'},
            {valor: 'Externa', descricao: 'Externo'}
        ];

        vm.limpar = limpar;
        vm.salvar = salvar;

        activate();

        function activate() {
            vm.entidade.origem = 'Interna';

            if($stateParams.id){
                vm.entidade = $rootScope.listaProdutos[$stateParams.id];
            }
        }

        function limpar() {
            vm.entidade = {};

            $scope.formProduto.$setUntouched();
        }

        function salvar() {

            if ($scope.formProduto.$invalid) {
                angular.forEach($scope.formProduto.$error, function (errorField) {
                    for (var i = 0; i < errorField.length; i++) {
                        errorField[i].$setTouched();
                    }
                });

                PdAlertService.showError('Verifique os campos inválidos');
                return;
            }

            var entidadeAux = vm.entidade;

            excluir(vm.entidade);

            $rootScope.listaProdutos.push(entidadeAux);

            PdAlertService.showSuccess('Produto Cadastrado com Sucesso!');

            limpar();

            $state.go('pesquisaProduto');
        }

        function excluir(entidade) {
            var index = $rootScope.listaProdutos.indexOf(entidade);

            $rootScope.listaProdutos.splice(index,1);
        }

    }

})();

