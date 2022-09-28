import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacter } from "../api/characterApi";
import { getLocationDetails } from "../api/locationApi";
import { API_EPISODE_URL } from "../api/constants";
import getEpisodes from "../api/episodeApi";

export function useDetails() {
    const params = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState({});
    const [originLocationDetails, setOriginLocationDetails] = useState({});
    const [lastLocationDetails, setLastLocationDetails] = useState({});
    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        getCharacter(params.id).then(character => {
            setCharacter(character);

            let locationIds = [character.originLocation.id, character.lastLocation.id];

            let episodeIds = character.episode.map(episode => episode.split(`${API_EPISODE_URL}`)[1])

            getLocationDetails(locationIds).then(locations => {
                let originLocationData = locations.filter(location => location.id == character.originLocation.id || location.id == 0);
                setOriginLocationDetails(originLocationData[0]);

                let lastLocationData = locations.filter(location => location.id == character.lastLocation.id);
                setLastLocationDetails(lastLocationData[0]);
            });

            getEpisodes(episodeIds).then(episodes => setEpisodeList(episodes))
        })
    }, [params.id])

    return {
        character,
        lastLocationDetails,
        originLocationDetails,
        episodeList,
        navigate
    };
}