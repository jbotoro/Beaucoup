import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailsButton from '../../buttons/details_button_container'
import MyStuffButton from '../../buttons/mystuff_button_container'
import {openModal} from '../../../actions/modal_actions'



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
        this.handlePlayVideo = this.handlePlayVideo.bind(this);

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

    handlePlayVideo(){
        
        let epinfo = ["episode", this.props.episodes[0]]

        this.props.openModal(epinfo)
    }

    // handleOpenShow(){
    //     let showinfo = ["showdetails", this.props.show.id]
    //     this.props.openModal(showinfo)
    // }



    render() {
        
        let vid;
        let eppic;
        let showpic;
        let epnum
        let eptitle
        let epdescrip;
        let showinfo = this.props.show
        let epdetailsinfo = this.props.episodes[0]
        let showid;
        if(this.props.episodes && this.props.show) {
            
            vid = this.props.episodes[0].video_url
           
            eppic = this.props.episodes[0].photo_url
            
            showpic = this.props.show.photo_url
         
            epnum = this.props.episodes[0].episode_number
           
            eptitle = this.props.episodes[0].title
         
            epdescrip = this.props.show.description
            
          
            
            showid = this.props.show.id
            
        }
      
  
        let simpleshow = 'simple-show-item'
        let simpleshowexpandable = 'simple-show-item-expandable'
        let simpleplaycontainer = 'simple-show-playbutton-container'
        let iconname = 'material-icons ds-1'
        let episode_num = null;
        let description_container = 'simple-show-episode-description'
        let buttons = null;
        let eptitlevar= null;
        let showtitle = this.props.show.title;
      
       

        if (this.state.hover) {
            simpleshow = "simple-show-item-2";
            simpleshowexpandable = 'simple-show-item-expandable-2'
            simpleplaycontainer = 'simple-show-playbutton-container-2'
            iconname = 'material-icons ds-2'
            description_container = 'simple-show-episode-description-2'

            eptitlevar = eptitle
            showtitle = null
            showpic = eppic
            buttons = <div className="details-button-container-showitem">
                <div><DetailsButton color='black' show= {showinfo} episode={epdetailsinfo}/></div>
                <div><MyStuffButton color='black' show= {showid}/></div>
            </div>
        }

        if (this.state.photohover) {
            iconname = 'material-icons ds-3'
        }

        if (this.state.hover) {
            episode_num =<div className="episode-num-container-showitem">EPISODE {epnum}</div>
            
           
        }

        if (this.props.genrespage) {
            simpleshow = "simple-show-item-genre";
            simpleshowexpandable = 'simple-show-item-expandable-genre'
            description_container = 'simple-show-episode-description-genre'
        }

        if (this.props.genrespage && this.state.hover) {
            simpleshow = "simple-show-item-genre-2";
            simpleshowexpandable = 'simple-show-item-expandable-genre-2'
            description_container = 'simple-show-episode-description-genre-2'
        }
      
        return (
            <div className='simple-show-item-container'>
                <div className={simpleshow} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                   <div className ={simpleshowexpandable}>
                        <div className ='simple-show-image-container' onMouseEnter={this.handlePhotoHover} onMouseLeave={this.handlePhotoLeave}>
                            <img className='simple-show-image' src={showpic}/>
                        </div>
                        <div className ={simpleplaycontainer} onClick={this.handlePlayVideo}>
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