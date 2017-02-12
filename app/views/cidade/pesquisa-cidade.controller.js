(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaCidadeController', PesquisaCidadeController);


    function PesquisaCidadeController(CidadeService) {
        var vm = this;

        vm.pdService = CidadeService.getPdService();

        activate();
        
        function activate() {
            
        }


    }

})();

