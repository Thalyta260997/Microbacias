var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_MapBiomas1985_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Map Biomas 1985",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapBiomas1985_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5139137.420827, -2684242.711754, -5096436.952678, -2651465.779224]
                            })
                        });
var lyr_MapBiomas1995_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Map Biomas 1995",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapBiomas1995_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5139137.420827, -2684242.711754, -5096436.952678, -2651465.779224]
                            })
                        });
var lyr_MapBiomas2005_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Map Biomas 2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapBiomas2005_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5139137.420827, -2684242.711754, -5096436.952678, -2651465.779224]
                            })
                        });
var lyr_MapBiomas2015_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Map Biomas 2015",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapBiomas2015_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5139137.420827, -2684242.711754, -5096436.952678, -2651465.779224]
                            })
                        });
var lyr_MapBiomas2022_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Map Biomas 2022",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapBiomas2022_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5139137.420827, -2684242.711754, -5096436.952678, -2651465.779224]
                            })
                        });
var format_DensidadePopulacional_7 = new ol.format.GeoJSON();
var features_DensidadePopulacional_7 = format_DensidadePopulacional_7.readFeatures(json_DensidadePopulacional_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadePopulacional_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadePopulacional_7.addFeatures(features_DensidadePopulacional_7);
var lyr_DensidadePopulacional_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadePopulacional_7, 
                style: style_DensidadePopulacional_7,
                popuplayertitle: "Densidade Populacional",
                interactive: true,
    title: 'Densidade Populacional<br />\
    <img src="styles/legend/DensidadePopulacional_7_0.png" /> 0 - 18<br />\
    <img src="styles/legend/DensidadePopulacional_7_1.png" /> 18 - 56<br />\
    <img src="styles/legend/DensidadePopulacional_7_2.png" /> 56 - 138<br />'
        });
var format_NDBI_8 = new ol.format.GeoJSON();
var features_NDBI_8 = format_NDBI_8.readFeatures(json_NDBI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDBI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDBI_8.addFeatures(features_NDBI_8);
var lyr_NDBI_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDBI_8, 
                style: style_NDBI_8,
                popuplayertitle: "NDBI",
                interactive: true,
                title: '<img src="styles/legend/NDBI_8.png" /> NDBI'
            });
var format_Buffer_9 = new ol.format.GeoJSON();
var features_Buffer_9 = format_Buffer_9.readFeatures(json_Buffer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_9.addFeatures(features_Buffer_9);
var lyr_Buffer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_9, 
                style: style_Buffer_9,
                popuplayertitle: "Buffer",
                interactive: true,
                title: '<img src="styles/legend/Buffer_9.png" /> Buffer'
            });
var format_BaciaParabaeLagoinha_10 = new ol.format.GeoJSON();
var features_BaciaParabaeLagoinha_10 = format_BaciaParabaeLagoinha_10.readFeatures(json_BaciaParabaeLagoinha_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciaParabaeLagoinha_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciaParabaeLagoinha_10.addFeatures(features_BaciaParabaeLagoinha_10);
var lyr_BaciaParabaeLagoinha_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciaParabaeLagoinha_10, 
                style: style_BaciaParabaeLagoinha_10,
                popuplayertitle: "Bacia Paraíba e Lagoinha",
                interactive: true,
                title: '<img src="styles/legend/BaciaParabaeLagoinha_10.png" /> Bacia Paraíba e Lagoinha'
            });
var format_Crimes2024_11 = new ol.format.GeoJSON();
var features_Crimes2024_11 = format_Crimes2024_11.readFeatures(json_Crimes2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crimes2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crimes2024_11.addFeatures(features_Crimes2024_11);
var lyr_Crimes2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crimes2024_11, 
                style: style_Crimes2024_11,
                popuplayertitle: "Crimes 2024",
                interactive: true,
                title: '<img src="styles/legend/Crimes2024_11.png" /> Crimes 2024'
            });
var group_Points = new ol.layer.Group({
                                layers: [lyr_Crimes2024_11,],
                                fold: "open",
                                title: "Points"});
var group_Line = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Line"});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_DensidadePopulacional_7,lyr_NDBI_8,lyr_Buffer_9,lyr_BaciaParabaeLagoinha_10,],
                                fold: "open",
                                title: "Polygon"});
var group_Raster = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_MapBiomas1985_2,lyr_MapBiomas1995_3,lyr_MapBiomas2005_4,lyr_MapBiomas2015_5,lyr_MapBiomas2022_6,],
                                fold: "open",
                                title: "Raster"});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MapBiomas1985_2.setVisible(true);lyr_MapBiomas1995_3.setVisible(true);lyr_MapBiomas2005_4.setVisible(true);lyr_MapBiomas2015_5.setVisible(true);lyr_MapBiomas2022_6.setVisible(true);lyr_DensidadePopulacional_7.setVisible(true);lyr_NDBI_8.setVisible(true);lyr_Buffer_9.setVisible(true);lyr_BaciaParabaeLagoinha_10.setVisible(true);lyr_Crimes2024_11.setVisible(true);
var layersList = [group_Raster,group_Polygon,group_Points];
lyr_DensidadePopulacional_7.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_MICRO': 'CD_MICRO', 'NM_MICRO': 'NM_MICRO', 'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'area_km2_1': 'area_km2_1', 'den_pop': 'den_pop', 'den_dom_km': 'den_dom_km', });
lyr_NDBI_8.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Buffer_9.set('fieldAliases', {'SPRCLASSE': 'SPRCLASSE', });
lyr_BaciaParabaeLagoinha_10.set('fieldAliases', {'SPRCLASSE': 'SPRCLASSE', });
lyr_Crimes2024_11.set('fieldAliases', {'NOME_DEPAR': 'NOME_DEPAR', 'NOME_SECCI': 'NOME_SECCI', 'NOME_DELEG': 'NOME_DELEG', 'CIDADE': 'CIDADE', 'ANO_BO': 'ANO_BO', 'NUM_BO': 'NUM_BO', 'DATA_COMUN': 'DATA_COMUN', 'DATA_OCORR': 'DATA_OCORR', 'HORA_OCORR': 'HORA_OCORR', 'DESC_PERIO': 'DESC_PERIO', 'DESCR_TIPO': 'DESCR_TIPO', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'NUMERO_LOG': 'NUMERO_LOG', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME_DEL_1': 'NOME_DEL_1', 'NOME_DEP_1': 'NOME_DEP_1', 'NOME_SEC_1': 'NOME_SEC_1', 'NOME_MUNIC': 'NOME_MUNIC', 'RUBRICA': 'RUBRICA', 'DESCR_COND': 'DESCR_COND', 'NATUREZA_A': 'NATUREZA_A', 'MES_ESTATI': 'MES_ESTATI', 'ANO_ESTATI': 'ANO_ESTATI', 'KERNEL': 'KERNEL', });
lyr_DensidadePopulacional_7.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_MICRO': 'TextEdit', 'NM_MICRO': 'TextEdit', 'CD_MESO': 'TextEdit', 'NM_MESO': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'area_km2_1': 'TextEdit', 'den_pop': 'TextEdit', 'den_dom_km': 'TextEdit', });
lyr_NDBI_8.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Buffer_9.set('fieldImages', {'SPRCLASSE': 'TextEdit', });
lyr_BaciaParabaeLagoinha_10.set('fieldImages', {'SPRCLASSE': 'TextEdit', });
lyr_Crimes2024_11.set('fieldImages', {'NOME_DEPAR': 'TextEdit', 'NOME_SECCI': 'TextEdit', 'NOME_DELEG': 'TextEdit', 'CIDADE': 'TextEdit', 'ANO_BO': 'TextEdit', 'NUM_BO': 'TextEdit', 'DATA_COMUN': 'TextEdit', 'DATA_OCORR': 'TextEdit', 'HORA_OCORR': 'TextEdit', 'DESC_PERIO': 'TextEdit', 'DESCR_TIPO': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'NUMERO_LOG': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME_DEL_1': 'TextEdit', 'NOME_DEP_1': 'TextEdit', 'NOME_SEC_1': 'TextEdit', 'NOME_MUNIC': 'TextEdit', 'RUBRICA': 'TextEdit', 'DESCR_COND': 'TextEdit', 'NATUREZA_A': 'TextEdit', 'MES_ESTATI': 'TextEdit', 'ANO_ESTATI': 'TextEdit', 'KERNEL': 'TextEdit', });
lyr_DensidadePopulacional_7.set('fieldLabels', {'CD_SETOR': 'no label', 'AREA_KM2': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'NM_SUBDIST': 'no label', 'CD_MICRO': 'no label', 'NM_MICRO': 'no label', 'CD_MESO': 'no label', 'NM_MESO': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'v0001': 'no label', 'v0002': 'no label', 'v0003': 'no label', 'v0004': 'no label', 'v0005': 'no label', 'v0006': 'no label', 'v0007': 'no label', 'area_km2_1': 'no label', 'den_pop': 'inline label - always visible', 'den_dom_km': 'no label', });
lyr_NDBI_8.set('fieldLabels', {'VALUE': 'no label', });
lyr_Buffer_9.set('fieldLabels', {'SPRCLASSE': 'no label', });
lyr_BaciaParabaeLagoinha_10.set('fieldLabels', {'SPRCLASSE': 'inline label - visible with data', });
lyr_Crimes2024_11.set('fieldLabels', {'NOME_DEPAR': 'no label', 'NOME_SECCI': 'no label', 'NOME_DELEG': 'no label', 'CIDADE': 'no label', 'ANO_BO': 'no label', 'NUM_BO': 'no label', 'DATA_COMUN': 'no label', 'DATA_OCORR': 'no label', 'HORA_OCORR': 'no label', 'DESC_PERIO': 'no label', 'DESCR_TIPO': 'no label', 'BAIRRO': 'no label', 'LOGRADOURO': 'no label', 'NUMERO_LOG': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'NOME_DEL_1': 'no label', 'NOME_DEP_1': 'no label', 'NOME_SEC_1': 'no label', 'NOME_MUNIC': 'no label', 'RUBRICA': 'no label', 'DESCR_COND': 'no label', 'NATUREZA_A': 'inline label - always visible', 'MES_ESTATI': 'no label', 'ANO_ESTATI': 'no label', 'KERNEL': 'no label', });
lyr_Crimes2024_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});