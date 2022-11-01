import Track from "./Track";
import Track1 from "../Audio/Sample1.wav";
import Track2 from "../Audio/Sample2.wav";
import Track3 from "../Audio/Sample3.wav";
import Track4 from "../Audio/Sample4.wav";
import Track5 from "../Audio/Sample5.wav";
import Track6 from "../Audio/Sample6.wav";
import Track7 from "../Audio/Sample7.wav";
import Track8 from "../Audio/Sample8.wav";
import Track9 from "../Audio/Sample9.wav";
import Track10 from "../Audio/Sample10.wav";


function TrackList({handleAddTrack}) {

    /* HARD CODED LIST OF TRACKS */
    const tracks = [
        { sound: Track1, name: "Never Gonna Give You Up", artist: "Rick Astley"},
        { sound: Track2, name: "Oil Er Up", artist: "The Calgary Boys"},
        { sound: Track3, name: "Rubber Ducky", artist: "Threepac Shakur "},
        { sound: Track4, name: "Angular Sucks!", artist: "The React Band"},
        { sound: Track5, name: "Don't React", artist: "The Angulars"},
        { sound: Track6, name: "Weightwatchers", artist: "Smallie Biggs"},
        { sound: Track7, name: "Remember Us", artist: "Nickelback"},
        { sound: Track8, name: "Rhapsody of the Bohemian Kind", artist: "King"},
        { sound: Track9, name: "Sorry", artist: "Kanye West"},
        { sound: Track10, name: "Just like Java", artist: "The C Sharps"},
    ];

    return (
        <div className="track_list">
            <ul>
                {tracks.map(t => (<Track trackInfo={t} handleAddTrack={handleAddTrack}/>))}
            </ul>
        </div>
    );
}

export default TrackList;