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
        let eppic;
        eppic = this.props.episodes[0].photo_url
        let showpic;
        showpic = this.props.show.photo_url
        let epnum
        epnum = this.props.episodes[0].episode_number
        let eptitle
        eptitle = this.props.episodes[0].title
        let epdescrip;
        epdescrip = this.props.show.description
        console.log(epnum)
      
        return (
            <div className='simple-show-item-container'>
                <div className='simple-show-item'>
                   <div className ='simple-show-item-expandable'>
                        <div className ='simple-show-image-container'>
                            <img className='simple-show-image' src={showpic}/>
                        </div>
                        <div className ='simple-show-playbutton-container'>
                            <div>
                                <i className='material-icons ds-1'> play_arrow </i>
                            </div>
                        </div>
                        <div className='simple-show-display-container'>
                            <div className='simple-show-display-info'>
                                <div className='simple-show-episode-num'>
                                    Episode: {epnum}
                                </div>
                            
                                <div className='simple-show-episode-title'>
                                    {eptitle}
                                </div>
                            
                                <div className='simple-show-episode-description'>
                                    {epdescrip}
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ShowItem);