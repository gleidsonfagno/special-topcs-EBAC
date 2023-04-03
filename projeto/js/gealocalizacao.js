
var h2 = document.querySelector("h2")
var map;
function success(pos){
     // 2 vai receber as cordenaas que o navigator vai retorna
     // console.log(pos)

     // seleciona a longitude e latitude
     // console.log(pos.coords.latitude, pos.coords.longitude);
     h2.textContent = `latitude: ${pos.coords.latitude}, longitude: ${pos.coords.longitude}`
     if(map === undefined){
          map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
     }else{
          map.remove();
          map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
     }

     // var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);

     L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
     .bindPopup("Eu estou aqui")
     .openPopup();
}

// prevenir qualquer tipo de erro
function error(err){
}

//1 pegar a localiza cao do usuario
// navigator.geolocation.getCurrentPosition(success, error);


// vai  atualizar a posicao observe a posicao
var watchID = navigator.geolocation.watchPosition(success, error, {
     // pegar localizaocao de forma mais precisa
     enableHighAccuracy: true,
     // depois de um tepo ele parade corrigir a posicao
     timeout: 5000
});


// vai para de manitorar  a localizaçao
// navigator.geolocation.clearWatch(watchID);
