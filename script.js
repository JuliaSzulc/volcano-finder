let mapOptions = {
    center: [57.6805855, 11.9866741],
    zoom: 5,
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let iconOptions = {
    icon: L.icon(
        {
            iconUrl: "volcano.png",
            iconSize: [40, 40],
        }
    ),
}

let popupOptions = {
    "closeButton": false,
}

let markers = L.markerClusterGroup();

volcanoes.forEach(v => {
    let marker = new L.Marker([v.lat, v.lng], iconOptions)//.addTo(map)

    marker.on("mouseover", event => {
        event.target.bindPopup(
            `<div><h3>${v.name}</h3><p><em>${v.country}</em></p><b>Type:</b> ${v.type}</br><b>Elevation:</b> ${v.elev} m</div>`,
            popupOptions
        ).openPopup();
    })
    marker.on("mouseout", event => {
        event.target.closePopup();
    })
    // marker.on("click", () => {
    //     window.open(v.url)
    // })

    markers.addLayer(marker);
})

map.addLayer(markers);
