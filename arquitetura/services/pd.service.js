(function () {
    'use strict';

    angular.module('pdProva')
        .service('PdService', PdService);


    function PdService($http,PdStorageService,PdAlertService) {
        return function (controller) {
            var self = this;

            self.controller = controller;

            self.entidade = {};

            self.providerStorageName= '';

            self.provider = [];

            self.metodoSalvar = 'salvar';
            self.metodoExcluir = 'excluir';
            self.metodoPesquisar = 'pesquisar';

            self.listaStorageEntidade= '';

            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;
            self.getAll = getAll;

            activate()

            function activate() {
            }

            function salvar() {
                var listaEntidadeStorageRef = self.listaEntidadeStorageRef;
                var provider = PdStorageService.get(listaEntidadeStorageRef) || [];

                for(var x = 0, y = provider.length; x < y; x ++){
                    if(provider[x].nome === self.entidade.nome){
                        PdAlertService.showError('Ja existe um registro com esse nome');
                        return;
                    }
                }

                var id = generateId(provider);
                self.entidade.id = id;

                provider.push(self.entidade);


                PdStorageService.set(listaEntidadeStorageRef, provider);
                self.limpar();
                PdAlertService.showSuccess('Cadastro realizado com sucesso');

            }

            function excluir(index) {
                var listaEntidadeStorageRef = self.listaEntidadeStorageRef;
                var provider = PdStorageService.get(listaEntidadeStorageRef) || [];

                provider.splice(index-1,1);

                PdStorageService.set(listaEntidadeStorageRef, provider);

            }

            function limpar() {
                self.entidade = {};
            }

            function pesquisar() {
                var listaEntidadeStorageRef = self.listaEntidadeStorageRef;
                var provider = PdStorageService.get(listaEntidadeStorageRef) || [];


                var listaFiltrada = [];

                if(self.entidade.nome){
                    for(var x = 0, y = provider.length; x < y; x ++){
                        if(provider[x].nome.indexOf(self.entidade.nome)){
                            listaFiltrada.push(provider[x]);
                        }
                    }
                }

                PdAlertService.showSuccess('Pesquisando...');

                return listaFiltrada;
            }

            function generateId(provider) {
                if(provider.length === 0){
                    return 1;
                }else{
                    var idInc = provider[provider.length-1].id;
                    return ++idInc;
                }
            }

            function getAll(listaEntidadeStorageRef) {
                if(listaEntidadeStorageRef){
                    return PdStorageService.get(listaEntidadeStorageRef);
                }
            }
        };
    }
})();