import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailsButton from '../../buttons/details_button_container'
import MyStuffButton from '../../buttons/mystuff_button_container'



class ShowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          hover: false,
          photohover: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handlePhotoHover = this.handlePhotoHover.bind(this);
        this.handlePhotoLeave = this.handlePhotoLeave.bind(this);

    }

    componentDidMount() {
        this.props.findEpisode(this.props.episodes[0].id)
    }

    handleMouseEnter() {
        this.setState({
            hover: true
        })
    }

    handleMouseLeave(){
        this.setState({
            hover: false
        })
    }

    handlePhotoHover() {
        this.setState({
            photohover: true
        })
    }

    handlePhotoLeave(){
        this.setState({
            photohover: false
        })
    }



    render() {
        
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
  
        let simpleshow = 'simple-show-item'
        let simpleshowexpandable = 'simple-show-item-expandable'
        let simpleplaycontainer = 'simple-show-playbutton-container'
        let iconname = 'material-icons ds-1'
        let episode_num = null;
        let description_container = 'simple-show-episode-description'
        let buttons = null;
        let eptitlevar= null;
        let showtitle = this.props.show.title;
        buttons = <div className="details-button-container-showitem">
            <div><DetailsButton /></div>
            <div><MyStuffButton /></div>
        </div>

        if (this.state.hover) {
            simpleshow = "simple-show-item-2";
            simpleshowexpandable = 'simple-show-item-expandable-2'
            simpleplaycontainer = 'simple-show-playbutton-container-2'
            iconname = 'material-icons ds-2'
            description_container = 'simple-show-episode-description-2'

            eptitlevar = eptitle
            showtitle = null
        }

        if (this.state.photohover) {
            iconname = 'material-icons ds-3'
        }

        if (this.state.hover) {
            episode_num =<div className="episode-num-container-showitem">EPISODE {epnum}</div>
            
           
        }
      
        return (
            <div className='simple-show-item-container'>
                <div className={simpleshow} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                   <div className ={simpleshowexpandable}>
                        <div className ='simple-show-image-container' onMouseEnter={this.handlePhotoHover} onMouseLeave={this.handlePhotoLeave}>
                            <img className='simple-show-image' src={showpic}/>
                        </div>
                        <div className ={simpleplaycontainer}>
                            <div>
                                <i className={iconname}> play_arrow </i>
                            </div>
                        </div>
                        <div className='simple-show-display-container'>
                            <div className='simple-show-display-info'>
                                {episode_num}
                            
                                <div className='simple-show-episode-title'>
                                    {eptitlevar}
                                    {showtitle}
                                </div>
                            
                                <div className={description_container}>
                                    {epdescrip}
                                </div>
                                <div>
                                    {buttons}
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