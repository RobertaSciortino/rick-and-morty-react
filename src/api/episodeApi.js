import axios from "axios";
import { API_EPISODE_URL } from "./constants";
import episodeParser from "./parser/EpisodeParser";

function getEpisodes(ids) {
    return axios.get(`${API_EPISODE_URL}${ids.join(',')}`)
            .then(response => {
                let episodes = response.data.map(episode => {
                    return episodeParser(episode);
                })

                return episodes
            })
            .catch(error => {
                throw {
                    message: 'Error retrieving episodes',
                    statusCode: error.response.statusCode
                }
            })
}

export default getEpisodes;