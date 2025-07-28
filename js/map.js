export function initMap() {
    mapboxgl.accessToken = 'your-mapbox-token';
    
    const map = new mapboxgl.Map({
        container: 'travel-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 20],
        zoom: 1.5
    });
    
    // Add markers and other map functionality
    addMapMarkers(map);
}

function addMapMarkers(map) {
    // Marker creation logic
}