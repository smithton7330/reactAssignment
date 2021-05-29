import Loader from "./Loader";
import ReactAudioPlayer from 'react-audio-player';
import mightyLove from './mightyLove.mp3'

export default function Intro(props) {
    return (
        <div>
            <h1 style={{ marginBottom: '80px', fontSize: "64px",
                         marginLeft: '10px', textAlign: 'center'}}>Hello React !</h1>
             <ReactAudioPlayer
                            src={mightyLove}
                            autoPlay
                            controls
                            style={{ width: '10%',
                                     opacity: 0.01}}
                        />
            <Loader />
            <button style={{ marginBottom: '20px', color: 'black', width: '100px', fontSize: '16px',
                             marginLeft: '174px', textAlign: 'center'}} onClick={()=>{props.movePage()}}>
                Music List
            </button>
        </div>
    );
}