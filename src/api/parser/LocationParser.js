import location from "../../model/location";

function locationParser(locationData) {
    let id = locationData.id;
    let name = locationData.name;
    let type = locationData.type;
    let dimension = locationData.dimension;
    let residents = locationData.residents.length;

    if (locationData.id === 0) {
        name = 'unknown';
        type = 'unknown';
        dimension = 'unknown';
        residents = 'unknown';
    }

    return location(id, name, type, dimension, residents);
}

export default locationParser;