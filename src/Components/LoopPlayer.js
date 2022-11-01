import React, {forwardRef, useImperativeHandle, useState} from "react";
import LoopTrack from "./LoopTrack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faMinus } from '@fortawesome/free-solid-svg-icons'

const LoopPlayer = forwardRef((props, ref) => {

    const [activeTracks, setActiveTracks] = useState([]);

    useImperativeHandle(ref, () => ({
        addTrack(track) {
            setActiveTracks([
                ...activeTracks,
                track
            ])
        },
    }));

    const removeTrack = (track) => {
        setActiveTracks(activeTracks.filter( t => {
            return t.name !== track.name;
        }));
    };

    const clearAllTracks = () => {
        setActiveTracks([]);
    };

    const playAllTracks = () => {
        // TO-DO
    }

    const stopAllTracks = () => {
        // TO-DO
    }

    return (
        <div className="track_player">
            <FontAwesomeIcon
                className="looperButton"
                icon={faMinus}
                onClick={() => clearAllTracks()}
            />
            <FontAwesomeIcon
                className="looperButton"
                icon={faStop}
                onClick={() => stopAllTracks()}
            />
            <FontAwesomeIcon
                className="looperButton"
                icon={faPlay}
                onClick={() => playAllTracks()}
            />
            <ul>
                {activeTracks.map(track => (<LoopTrack trackInfo={track} handleRemoveTrack={removeTrack}/>))}
            </ul>
        </div>
    );
})

export default LoopPlayer;