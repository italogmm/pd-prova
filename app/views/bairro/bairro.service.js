(function () {
    'use strict';

    angular.module('pdProva')
        .service('BairroService', BairroService);

    function BairroService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('bairroController');


            ps.listaEntidadeStorageRef = 'listaBairro';

            ps.provider = ps.getAll(ps.listaEntidadeStorageRef);

            ps.gridOptions = {
                data: ps.provider || [],
                enableColumnMenus: false,
                enableRowSelection:false
            };


            return ps;
        }

    }
})();