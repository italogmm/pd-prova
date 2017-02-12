(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaBairroController', PesquisaBairroController);


    function PesquisaBairroController(BairroService) {
        var vm = this;

        vm.pdService = BairroService.getPdService();

        activate();

        function activate() {

        }

    }

})();

