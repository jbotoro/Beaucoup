import React from 'react';
import { withRouter } from 'react-router-dom';



class FeaturedShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.findEpisode(this.props.episodes[0].id)
    }



    render() {

        let vid;
        vid = this.props.episodes[0].video_url
        let pic;
        pic = this.props.episodes[0].photo_url
        let tallpic;
        tallpic = this.props.show.tallphoto_url
        let title;
        title = this.props.show.title
        let description;
        description = this.props.show.description


            return (
                <div className='featured-show-item-container'>
                    <div className='featured-show-item'>

                    </div>
                    <img className='featured-tall-photo' src={tallpic} alt=""/>
                    <div className ='featured-second-row'>
                        <img src={pic}alt=""/>
                        <i className ='material-icons fr1'> play_arrow </i>
                        <video src={vid} type='video/mp4'></video>
                    </div>
                    <div className= 'featured-info-container'>
                        <div className='featured-info'>
                            <div className='featured-title'>
                                <div>{title}</div>
                                <div className='featured-description'>
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default withRouter(FeaturedShow);