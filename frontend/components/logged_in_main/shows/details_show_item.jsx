import React from 'React'
import DetailsButton from '../../buttons/details_button';
import MyStuffButton from '../../buttons/mystuff_button_container'


class DetailsShowItem extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            hover: false,
            photohover: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handlePhotoHover = this.handlePhotoHover.bind(this);
        this.handlePhotoLeave = this.handlePhotoLeave.bind(this);
        this.handlePlayVideo = this.handlePlayVideo.bind(this);
    }

    handleMouseEnter() {
        this.setState({
            hover: true
        })
    }

    handleMouseLeave() {
        this.setState({
            hover: false
        })
    }

    handlePhotoHover() {
        this.setState({
            photohover: true
        })
    }

    handlePhotoLeave() {
        this.setState({
            photohover: false
        })
    }

    handlePlayVideo() {

        let epinfo = ["episode", this.props.episodes]

        this.props.openModal(epinfo)
    }

 



    render() {
        
        let vid;
        vid = this.props.episodes.video_url
        let eppic;
        eppic = this.props.episodes.photo_url
        let showpic;
        showpic = this.props.show.photo_url
        let epnum
        epnum = this.props.episodes.episode_number
        let eptitle
        eptitle = this.props.episodes.title
        let epdescrip;
        epdescrip = this.props.show.description
        let showinfo = this.props.show
        // console.log(showinfo)
        let epdetailsinfo = this.props.episodes

        let simpleshow = 'simple-show-item-details'
        let simpleshowexpandable = 'simple-show-item-expandable-details'
        let simpleplaycontainer = 'simple-show-playbutton-container-details'
        let iconname = 'material-icons ds-1'
        let episode_num = null;
        let description_container = 'simple-show-episode-description-details'
        let buttons = null;
        let eptitlevar = null;
        // let showtitle = this.props.show.title;


        
        if (this.state.hover) {
            simpleshow = "simple-show-item-2-details";
            simpleshowexpandable = 'simple-show-item-expandable-2-details'
            simpleplaycontainer = 'simple-show-playbutton-container-2-details'
            iconname = 'material-icons ds-2'
            description_container = 'simple-show-episode-description-2-details'

            eptitlevar = eptitle
            // showtitle = null
            showpic = eppic
        //     buttons = <div className="details-button-container-showitem">
        //         <div><DetailsButton color='black' show={showinfo} episode={epdetailsinfo} /></div>
        //         <div><MyStuffButton color='black' show={showinfo} /></div>
        //     </div>
        }

        if (this.state.photohover) {
            iconname = 'material-icons ds-3'
        }

        episode_num = <div className="episode-num-container-showitem">EPISODE {epnum}</div>


       

        return(
            <div className='simple-show-item-container-details'>
                <div className={simpleshow} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <div className={simpleshowexpandable}>
                        <div className='simple-show-image-container' onMouseEnter={this.handlePhotoHover} onMouseLeave={this.handlePhotoLeave}>
                            <img className='simple-show-image' src={eppic} />
                        </div>
                        <div className={simpleplaycontainer} onClick={this.handlePlayVideo}>
                            <div>
                                <i className={iconname}> play_arrow </i>
                            </div>
                        </div>
                        <div className='simple-show-display-container'>
                            <div className='simple-show-display-info-details'>
                                {episode_num}

                                <div className='simple-show-episode-title-details'>
                                    {eptitle}
                                </div>

                                <div className={description_container}>
                                    {epdescrip}
                                </div>
                                <div>
                                    {/* {buttons} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

        
    }
}

export default DetailsShowItem