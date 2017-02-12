(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroCidadeController', CadastroCidadeController);


    function CadastroCidadeController($scope, CidadeService) {
        var vm = this;

        vm.pdService = CidadeService.getPdService();

        activate();


        function activate() {
        }
    }

})();

