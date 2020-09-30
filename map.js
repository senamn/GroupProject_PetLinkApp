function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(33.2075,97.1526),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


    var marker = new google.maps.Marker({
        position:myCenter,
        animation:google.maps.Animation.BOUNCE
        });
        
        marker.setMap(map);
}