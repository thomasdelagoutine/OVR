/**
 * Created by Thomas on 03/02/2018.
 */
app.controller('traceController', ['$scope', '$location',
    function ($scope, $location) {

        // Definition url des services Geoportail
        function geoportailLayer(name, key, layer, options) {
            var l = new google.maps.ImageMapType
            ({
                getTileUrl: function (coord, zoom) {
                    return "http://wxs.ign.fr/" + key + "/geoportail/wmts?LAYER=" + layer
                        + "&EXCEPTIONS=text/xml"
                        + "&FORMAT=" + (options.format ? options.format : "image/jpeg")
                        + "&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile"
                        + "&STYLE=" + (options.style ? options.style : "normal") + "&TILEMATRIXSET=PM"
                        + "&TILEMATRIX=" + zoom
                        + "&TILECOL=" + coord.x + "&TILEROW=" + coord.y;
                },
                tileSize: new google.maps.Size(256, 256),
                name: name,
                minZoom: (options.minZoom ? options.minZoom : 0),
                maxZoom: (options.maxZoom ? options.maxZoom : 18)
            });
            l.attribution = ' &copy; <a href="http://www.ign.fr/">IGN-France</a>';
            return l;
        }

// Ajout de l'attribution Geoportail a la carte
        function geoportailSetAttribution(map, attributionDiv) {
            if (map.mapTypes.get(map.getMapTypeId()).attribution) {
                attributionDiv.style.display = 'block';
                attributionDiv.innerHTML = map.mapTypes.get(map.getMapTypeId()).name
                    + map.mapTypes.get(map.getMapTypeId()).attribution;
            }
            else attributionDiv.style.display = 'none';
        }

        var map;
// Initialisation de la carte
        function initMap() { // La carte Google
            var MA_CLE = "o6gzr4hxjvtqsrb8p92h4g8t";
            map = new google.maps.Map(document.getElementById('map'),
                {
                    mapTypeId: 'carte',
                    streetViewControl: false,
                    mapTypeControlOptions: {mapTypeIds: ['carte', google.maps.MapTypeId.ROADMAP]},
                    center: new google.maps.LatLng(48.845, 2.424),
                    zoom: 15
                });

            /** Definition des couches  */
            // Carte IGN
            map.mapTypes.set('carte', geoportailLayer("Carte IGN", MA_CLE, "GEOGRAPHICALGRIDSYSTEMS.MAPS", {maxZoom: 18}));
            // Ajouter un control pour l'attribution
            var attributionDiv = document.createElement('div');
            attributionDiv.className = "attribution";
            geoportailSetAttribution(map, attributionDiv);
            map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(attributionDiv);
            // Afficher / masquer le copyright en fonction de la couche
            google.maps.event.addListener(map, 'maptypeid_changed',
                function () {
                    geoportailSetAttribution(this, attributionDiv);
                });

            // Ajouter une punaise
            var infowindow = new google.maps.InfoWindow({content: "C'est facile !"});
            var marker = new google.maps.Marker
            ({
                position: new google.maps.LatLng(48.84475, 2.4237),
                map: map
            });
            google.maps.event.addListener(marker, 'click',
                function () {
                    infowindow.open(map, marker);
                });
            infowindow.open(map, marker);
            $scope.$apply();
        }

        google.maps.event.addDomListener(window, 'load', initMap);

        $scope.$apply();


    }]);




