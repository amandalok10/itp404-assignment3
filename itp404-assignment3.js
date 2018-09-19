navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude; 
    let long = position.coords.longitude;
    
    let userLoc = new google.maps.LatLng(lat, long);
 
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: userLoc
    }); 
    

    let marker = new google.maps.Marker({
        position: userLoc,
        map: map

    }); 
    

    let geocoder = new google.maps.Geocoder();
    
   
    geocoder.geocode({
      location: userLoc,
    }, function(geocoderResults) {
      console.log(geocoderResults);
        
         console.log(geocoderResults[0].formatted_address)

        
        let infoWindow = new google.maps.InfoWindow({
      position: userLoc,
      content: geocoderResults[0].formatted_address
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map);
    });
    }); 
  
});





