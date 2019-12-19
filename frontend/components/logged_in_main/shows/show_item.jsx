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
        
        console.log(this.props.episodes[0])
        console.log(this.props.episodes[0].video_url)
        let vid;
        vid = this.props.episodes[0].video_url
        let pic;
        pic = this.props.episodes[0].photo_url
        let type
      
        if (vid.endsWith)
        return (
            <div className='simple-show-item-container'>
                <div className='simple-show-item'>
                    <button className='simple-show-item-play-button'>
                        <video width = 'pixels' height = 'pixels' controls>
                            <source src={vid} type='video/mp4'></source>
                        </video>
                        <img src={pic} />
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(ShowItem);