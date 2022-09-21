import episode from "../../model/episode";

function episodeParser(episodeData) {
    let id = episodeData.id;
    let name = episodeData.name;
    let code = episodeData.episode;

    return episode(id, name, code);
}

export default episodeParser;