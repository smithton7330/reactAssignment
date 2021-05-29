import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import testaudio from './testaudio.mp3'


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMusicPlaying: false,
        }
        
    }

    render () {
        let audio = new Audio(this.props.mp3Url);
        
        const onClicked = () => {
            const { isMusicPlaying } = this.state;
            this.setState({
                isMusicPlaying: !isMusicPlaying
            })
            if(audio.paused == false) {
                this.audio.pause()
                // alert(audio.paused)
            }
            else if(audio.paused == true) {
                audio.play()
                // alert(audio.paused)
            }

        }

        return (
            <div style={{ width: '300px', display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', justifyContent:'space-between', flexDirection: 'column'}}>
                    <div 
                        style={{ width: '250px', display: 'flex', justifyContent:   'center'}}
                        onClick={() => onClicked()}
                    >
                        <img src={this.props.imgUrl} alt={this.props.title}/>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>
                        <h5>{ this.props.title }</h5>
                        <h6>{ this.props.artist }</h6>
                    </div>
    
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <ReactAudioPlayer
                            src={this.props.mp3Url}
                            controls
                            style={{ width: '75%'}}
                        />
                    </div>
    
                </div>
            </div>
        )
    }


}