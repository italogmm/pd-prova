(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroCidadeController', CadastroCidadeController);


    function CadastroCidadeController($scope, CidadeService,$stateParams) {
        var vm = this;

        vm.pdService = CidadeService.getPdService();

        activate();


        function activate() {
            if($stateParams.id){
                var listaCidade = vm.pdService.provider;

                for(var x = 0, y = listaCidade.length; x < y; x ++){
                    if(listaCidade[x].id.toString() === $stateParams.id){
                        vm.pdService.entidade = listaCidade[x];
                    }
                }
            }
        }
    }

})();

