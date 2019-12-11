import React from 'react';


class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            browse: false
        };
        this.browsebuttonhandler = this.browsebuttonhandler.bind(this);
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handlebackten = this.handlebackten.bind(this);
        this.handleforwardten = this.handleforwardten.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleprogressbar = this.handleprogressbar.bind(this);
    }

    componentDidMount() {
        this.props.getEpisode(this.props.videoId);
        this.vid = document.getElementById("my_video");
        this.progressbar = document.getElementById("progressbar");
        this.currenttime = document.getElementById("currenttime");
        this.fulltime = document.getElementById("fulltime");
    }


    componentDidUpdate(prevProps) {
        if ((prevProps.location.pathname !== this.props.history.location.pathname && !this.state.browse)) {
            this.props.closeModal()
        }
        this.vid = document.getElementById("my_video");

        if (prevProps.videoId !== this.props.videoId) {
            this.props.getEpisode(this.props.videoId);
        }
    }

    browsebuttonhandler() {
        if (!this.state.browse) {
            this.setState({ browse: true });
        } else {
            this.setState({ browse: false });
        }
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

    handlebackten() {
        this.vid.currentTime -= 10;
    }

    handleforwardten() {
        this.vid.currentTime += 10;
    }

    handleprogressbar() {

        let changeto = this.vid.duration * (this.progressbar.value / 100);
        this.vid.currentTime = changeto;
    }

    handleTimeUpdate() {
        let newtime = this.vid.currentTime * (100 / this.vid.duration);
        this.progressbar.value = newtime;

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


    render() {

        let playPause = "pause";
        if (this.state.pause) {
            playPause = "play_arrow";
        }


        let videobackground = "videoplayer-background";
        let videoplayercontainer = "videoplayercontainer";
        let browsebutton = <i className="material-icons vid2">fullscreen_exit</i>
        let browsebuttonposition = "browsebuttonposition";
        let videoplayer = "videoplayer"

        if (this.state.browse) {
            videobackground = "videoplayer-background2";
            videoplayercontainer = "videoplayercontainer2";
            browsebutton = <i className="material-icons vid2">fullscreen</i>
            browsebuttonposition = "browsebuttonposition2"
            videoplayer = "videoplayer2"
        }

        let video = null;
        if (this.props.video) {
            let src = `${this.props.video.videoUrl}`;
            video = <video id="my_video" onTimeUpdate={this.handleTimeUpdate} className={videoplayer} src={src} autoPlay />;
        }

        return (

            <div className={videobackground} >
                <div className={videoplayercontainer} >
                    {video}
                    <div>
                        <button onClick={() => this.props.closeModal()} className="VideoClose">X</button>
                    </div>
                    <div className="VideoControlBar">
                        <button onClick={this.handlePlayPause} className="material-icons playPause">{playPause}</button>
                        <button onClick={this.handleforwardten} className="material-icons forwardten">forward_10</button>
                        <button onClick={this.handlebackten} className="material-icons backten">replay_10</button>

                        <div className="Progressbarrdurration">
                            <input id="progressbar" className="progressbar" onChange={this.handleprogressbar} type="range" min="0" max="100" value="" step="1" />

                            <div id="currenttime" className="currenttime">00:00</div>
                            <span className="slash"> /</span>
                            <span id="fulltime" className="fulltime">00:00</span>


                        </div>
                        <div onClick={this.browsebuttonhandler} className="browsebuttonposition">
                            {browsebutton}
                        </div>
                    </div>

                </div>
            </div>
        )


    }


}


export default VideoPlayer;