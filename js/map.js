let map;

function initMap() {
    
    let options = {
        center: { lat: -21.115, lng: 55.536 },
        zoom: 11
        //mapTypeId: google.maps.MapTypeId.HYBRID
    };

    map = new google.maps.Map(document.getElementById("map"), options);

}