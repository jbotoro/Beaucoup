import React from 'React'
import {withRouter} from 'react-router-dom'
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux'

class VideoPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            fullscreen: false,
            timer: 5

        }

        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleSkipBack = this.handleSkipBack.bind(this);
        this.handleSkipForward = this.handleSkipForward.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.handleFullscreen = this.handleFullscreen.bind(this);
        this.handleControlEnter = this.handleControlEnter.bind(this);
        this.handleControlLeave = this.handleControlLeave.bind(this);
        this.handleNoMouseMove = this.handleNoMouseMove.bind(this);
        this.resetTimer = this.resetTimer.bind(this)
        this.decrementTimer = this.decrementTimer.bind(this)

    }

    componentDidMount() {
        this.vid = document.getElementById("video");
        this.progressbar = document.getElementById("progress-bar");
        this.currenttime = document.getElementById("current-time");
        this.fulltime = document.getElementById("end-time");
    }

    handlePlayPause() {
        if (this.vid.paused) {
            this.vid.play();
            this.setState({ pause: false });
        } else {
            this.vid.pause();
            this.setState({ pause: true });
        }
    }

    handleSkipBack () {
        this.vid.currentTime -= 10;
    }

    handleSkipForward () {
        this.vid.currentTime += 10;
    }

    handleFullscreen() {
        if (!this.state.fullscreen) {
            this.setState({ fullscreen: true });
        } else {
            this.setState({ fullscreen: false });
        }
    }

    handleTimeUpdate() {
        let updatedTime = this.vid.currentTime * (100 / this.vid.duration);
        this.progressbar.value = updatedTime;

        let currentMins = Math.floor(this.vid.currentTime / 60);
        let currentSecs = Math.floor(this.vid.currentTime - currentMins * 60);
        let totalMins = Math.floor(this.vid.duration / 60);
        let totalSecs = Math.floor(this.vid.duration - totalMins * 60);
        if (currentSecs < 10) { currentSecs = "0" + currentSecs; }
        if (currentMins < 10) { currentMins = "0" + currentMins; }
        if (totalSecs < 10) { totalSecs = "0" + totalSecs; }
        if (totalMins < 10) { totalMins = "0" + totalMins; }
        this.fulltime.innerHTML = totalMins + ":" + totalSecs;
        this.currenttime.innerHTML = currentMins + ":" + currentSecs;
    }

    handleProgress() {
        let progress = this.vid.duration * (this.progressbar.value / 100);
        this.vid.currentTime = progress;
    }

    handleControlEnter(){
       this.setState({
            hover: true
        })
     
        
    }

    handleControlLeave() {
        this.setState({
            hover: false
        })
          
    }

    resetTimer(){
        this.setState({
            timer: 5
        })
    }

    decrementTimer() {
        // debugger
        this.setState({
            timer: this.state.timer - 1
        })
    }

    handleNoMouseMove() {
        this.handleControlEnter();
        this.resetTimer()
       
        
    }

    render() {
        let playPause = "pause";
        if (this.state.pause) {
            playPause = "play_arrow";
        }


        let videoplayercontainer = 'video-player-container';
        let videomodalbackground = 'video-player-modal-container-background';
        let videomodalcontainer = 'video-player-modal-container';
        let fullscreenicon = <i className="material-icons FS2"> fullscreen_exit </i> 
        let fullscreencontainer = 'fullscreen-container'
        let videoplayercontrol = null
        let video = null;
        if (this.props.video) {
            let src = `${this.props.video.video_url}`;
            video = <video id="video" onTimeUpdate={this.handleTimeUpdate} className={videoplayercontainer} src={src} autoPlay />;
        }

        if(this.state.hover === true) {
            videoplayercontrol = 'video-player-modal-controlbar'
        }

        if(this.state.hover === false) {
            videoplayercontrol = 'video-player-modal-controlbar-2'
        }


        if(this.state.fullscreen) {
            videoplayercontainer = 'video-player-container-2';
            videomodalbackground = 'video-player-modal-container-background-2';
            videomodalcontainer = 'video-player-modal-container-2';
            fullscreenicon = <i className="material-icons FS2">fullscreen</i> 
            fullscreencontainer = 'fullscreen-container-2'
        }

        

        return(
            <div className={videomodalbackground} onMouseMove={this.handleNoMouseMove} >
                <div className={videomodalcontainer} >
                    {video}
                    <div>
                        <button className='video-player-modal-closebtn' onClick={() => this.props.closeModal()}>
                            <i className="material-icons">clear</i>
                        </button>
                    </div>
                    <div className={videoplayercontrol}>
                        <button className='material-icons Pause1' onClick={this.handlePlayPause}>{playPause}</button>
                        <button className='material-icons Fastforward1' onClick={this.handleSkipForward}> forward_10</button>
                        <button className='material-icons Rewind1' onClick={this.handleSkipBack}> replay_10</button>

                        <div className='video-player-modal-progressbar'>
                            <input className='progress-bar' onChange={this.handleProgress} type="range" min='0' max='100' value='' step='1' name="" id="progress-bar"/>
                            
                            <div className='current-time' id='current-time'> 00:00</div>
                            <span className='progress-bar-slash'> / </span>
                            <span className='end-time' id='end-time'>00:00</span>
                        </div>
                        <div className={fullscreencontainer} onClick={this.handleFullscreen}>
                            {fullscreenicon}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    
}



export default VideoPlayer 