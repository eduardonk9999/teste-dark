$(document).ready(function () {
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.darksidebooks.com.br/api/catalog_system/pub/products/search?fq",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);

    });

    
});