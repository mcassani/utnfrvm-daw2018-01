(function () {
    'use strict';
    angular
        .module('MiApp')
        .service('PeliculaResource', PeliculaResource);

    function PeliculaResource($resource, URL_SERVIDOR) {
        return $resource(URL_SERVIDOR + 'peliculas/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
})();