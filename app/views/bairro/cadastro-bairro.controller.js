(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroBairroController', CadastroBairroController);


    //PdAlertService
    function CadastroBairroController($scope, BairroService, $stateParams) {
        var vm = this;

        vm.pdService = BairroService.getPdService();

        activate();

        function activate() {
            if($stateParams.id){
                var listaBairro = vm.pdService.provider;

                for(var x = 0, y = listaBairro.length; x < y; x ++){
                    if(listaBairro[x].id.toString() === $stateParams.id){
                        vm.pdService.entidade = listaBairro[x];
                    }
                }
            }
        }
    }

})();

