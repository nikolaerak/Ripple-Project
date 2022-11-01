import React, {useState} from "react";
import {Howl, Howler} from "howler";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function LoopTrack({trackInfo, handleRemoveTrack}) {

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
        <div className="loop-track">
            {trackInfo.name}
            <FontAwesomeIcon
                className="trackButton"
                icon={faMinus}
                onClick={() => handleRemoveTrack(trackInfo)}
            />
        </div>
    );
}

export default LoopTrack;