(function () {
    'use strict';

    angular.module('pdProva')
        .service('BairroService', BairroService);

    function BairroService(PdService,$state) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('bairroController');

            ps.listaEntidadeStorageRef = 'listaBairro';
            ps.editar = editar;

            ps.provider = ps.getAll(ps.listaEntidadeStorageRef);

            ps.gridOptions = {
                data: ps.provider,
                columnDefs: [
                    {name: 'Nome', field: 'nome'},
                    {
                        name: 'Data cadastro',
                        field: 'dataCadastro',
                        width: 150,
                        cellTemplate: 'arquitetura/template/cell-template-date.html'
                    },
                ],
                enableColumnMenus: false,
                enableRowSelection:false
            };


            function editar(index) {
                $state.go('cadastroBairro', {id:index});
            }
            return ps;
        }

    }
})();