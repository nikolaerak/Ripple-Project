import React, {useState} from "react";
import {Howl} from "howler";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlay, faStop, faPlus } from '@fortawesome/free-solid-svg-icons'

function Track({trackInfo, handleAddTrack}) {

    const [sound, setSound] = useState(null);

    const playTrack = (src) => {
        if(sound === null){
            const sound = new Howl({src});
            setSound(sound);
            sound.play();
        }
    };

    const stopTrack = (src) => {
        if(sound != null){
            sound.stop();
            sound.unload();
            setSound(null);
        }
    }

    return (
        <div
            className="track"
            draggable
        >
            <strong>{trackInfo.artist}</strong>
            {sound !== null && (<FontAwesomeIcon style={{marginLeft: "10px"}} icon={faMusic} />)}
            <FontAwesomeIcon
                className="trackButton"
                icon={faPlus}
                onClick={() => handleAddTrack(trackInfo) }
            />
            <FontAwesomeIcon
                className="trackButton"
                icon={faStop}
                onClick={() => stopTrack(trackInfo.sound)}
            />
            <FontAwesomeIcon
                className="trackButton"
                icon={faPlay}
                onClick={() => playTrack(trackInfo.sound)}
            />
            <br/>
            {trackInfo.name}
        </div>
    );
}

export default Track;