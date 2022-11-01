import {useRef} from "react";
import TrackList from "./TrackList";
import LoopPlayer from "./LoopPlayer";

function MainComponent() {

    const loopPlayerRef = useRef(null);

    const handleAddTrack = (track) => {
        loopPlayerRef.current.addTrack(track);
    };

    return (
        <div className="main_wrap">
            <TrackList handleAddTrack={handleAddTrack}/>
            <LoopPlayer ref={loopPlayerRef}/>
        </div>
    );
}

export default MainComponent;