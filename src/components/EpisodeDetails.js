import { Fragment } from "react";
import classes from '../style/details.module.css';

const EpisodeDetails = (props) => {
    return (
        <Fragment>
            <h3 className={`text-uppercase ${classes['section-title']}`}>{props.title}</h3>
            <ul>
                {
                    props.data.map(episode => {
                        return (
                            <li key={episode.id}>
                                <strong>{episode.name}</strong>{` - ${episode.code}`}
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

export default EpisodeDetails;