function activatePlacesSearch() {
  var input = document.getElementById('autocomplete');
  autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', getAddress);
}
 function getAddress(){
   var place = autocomplete.getPlace();
   window.lat = place.geometry.location.lat()
   window.lng = place.geometry.location.lng();

   window.location.href = 'file:///Users/jorgerosas/dev/Proyecto-Centraal/restaurantes.html';
 }
