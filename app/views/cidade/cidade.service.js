(function () {
    'use strict';

    angular.module('pdProva')
        .service('CidadeService', CidadeService);

    function CidadeService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('cidadeController');

            ps.listaEntidadeStorageRef = 'listaCidade';

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