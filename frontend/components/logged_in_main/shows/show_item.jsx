import React from 'react';
import { withRouter } from 'react-router-dom';



class ShowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    componentDidMount() {
        this.props.findEpisode(this.props.episodes[0].id)
    }



    render() {
        debugger
        console.log(this.props.episodes[0])
        console.log(this.props.episodes[0].video_url)
        let vid;
        vid = this.props.episodes[0].video_url
        let pic;
        pic = this.props.episodes[0].photo_url
        return (
            <div className='simple-show-item-container'>
                <div className='simple-show-item'>
                    <button className='simple-show-item-play-button'>
                        <video src={vid}></video>
                        <img src={pic} />
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(ShowItem);