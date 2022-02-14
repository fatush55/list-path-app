import { Points } from 'types';

export default (
  points: Points[],
  map: google.maps.Map | undefined,
  handlerDistance?: (val: number) => void
) => {
  if (points.length <= 1) return false;

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  const waypts: google.maps.DirectionsWaypoint[] = [];
  const [origin, destination, ...waypoints] = points;

  if (waypoints.length) {
    for (let latLng of waypoints) {
      waypts.push({
        location: new google.maps.LatLng(latLng),
        stopover: true,
      });
    }
  }

  directionsService
    .route({
      origin: new google.maps.LatLng(origin),
      destination: new google.maps.LatLng(destination),
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);

      const distance = response.routes[0].legs.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue.distance?.value || 0);
      }, 0);

      if (handlerDistance) {
        handlerDistance(distance);
      }
    })
    .catch((e) => {
      console.log(e);
    });

  // @ts-ignore
  directionsRenderer.setMap(map);
};
