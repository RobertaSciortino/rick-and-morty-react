import axios from "axios";
import {API_CHARACTER_URL} from '../api/constants';
import createPage from '../model/page';
import characterParser from '../api/parser/CharacterParser';

function getCharactersPage(page) {
    return axios.get(API_CHARACTER_URL + '?page=' + page)
            .then(response => {
                let total_count = response.data.info.count;
                let items = response.data.results.map(result => characterParser(result))
                return createPage(total_count, items);
            })
            .catch(error => {
                throw {
                    message: 'Error retrieving characters',
                    statusCode: error.response.statusCode
                }
            })
}

export default getCharactersPage;