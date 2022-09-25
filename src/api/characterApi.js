import axios, { Axios } from "axios";
import {API_CHARACTER_URL} from '../api/constants';
import createPage from '../model/page';
import characterParser from '../api/parser/CharacterParser';
import character from "../model/character";

function getCharactersPage(page) {
    return axios.get(`${API_CHARACTER_URL}?page=${page}`)
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
function getCharacter(id) {
    return axios.get(`${API_CHARACTER_URL}${id}`)
            .then(response => characterParser(response.data))
            .catch(error => {
                throw {
                    message: 'Error retrieving characters',
                    statusCode: error.response.statusCode
                }
            })
}

export { getCharactersPage, getCharacter };