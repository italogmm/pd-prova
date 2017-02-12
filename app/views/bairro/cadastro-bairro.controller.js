(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroBairroController', CadastroBairroController);


    //PdAlertService
    function CadastroBairroController($scope, BairroService) {
        var vm = this;

        vm.pdService = BairroService.getPdService();

        activate();

        function activate() {
        }
    }

})();

