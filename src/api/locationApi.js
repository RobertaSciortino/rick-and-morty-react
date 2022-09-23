import axios from "axios";
import { API_LOCATION_URL } from './constants';
import locationParser from './parser/LocationParser';

function getLocationDetails(ids) {
    return axios
        .get(`${API_LOCATION_URL}${ids.join(',')}`)
        .then(response => {
            let locations = response.data.map(location => {
                return locationParser(location);
            })

            return locations;
        })
        .catch(error => {
            throw {
                message: 'Error retrieving locations',
                statusCode: error.response.statusCode
            }
        })
}

export { getLocationDetails };