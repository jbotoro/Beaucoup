import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailsButton from '../../buttons/details_button_container';
import MyStuffButton from '../../buttons/mystuff_button_container';


class FeaturedShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            firsthover : false,
            playhover: "material-icons fr-1",
            play: null
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleVidPicEnter = this.handleVidPicEnter.bind(this);
        this.handleVidPicLeave = this.handleVidPicLeave.bind(this);
        this.handlePlayVideo = this.handlePlayVideo.bind(this);

    }

    componentDidMount() {
        this.props.findEpisode(this.props.episodes[0].id)
    }

    handleVidPicEnter() {
        setTimeout(() => {
            if (this.state.playhover === "material-icons fr-2") {
                this.setState({ playhover: "material-icons fr-3" });
            }
        }, 100);
    }

    handleVidPicLeave() {
        this.setState({ 
            playhover: "material-icons fr-2" 
        });
    }

    handleMouseEnter(){
        this.setState({ firsthover: true })
        setTimeout(() => {
            if (this.state.firsthover) {
                this.setState({ hover: true, playhover: "material-icons fr-2" });
            }
        }, 200);
    }

    handleMouseLeave(){
        this.setState({ 
            firsthover: false, 
            hover: false, 
            play: null, 
            playhover: "material-icons fr-1" 
        });
    }

    handlePlayVideo(){
        let epinfo = ["episode", this.props.episodes[0]]

        this.props.openModal(epinfo)
    }

    handleOpenShow() {
        let showinfo = ["show", this.props.show.id]
        this.props.openModal(showinfo)
    }

    render() {
        let featured_show_item = "featured-show-item";
        switch (this.props.show.title) {

            case "My Hero Academia":
                featured_show_item = "featured-show-item-mha";
                break;

            case "Death Note":
                featured_show_item = "featured-show-item-dn";
                break;
            case "Dragon Ball Super":
                featured_show_item = "featured-show-item-dbs";
                break;
            case "Attack on Titan":
                featured_show_item = "featured-show-item-aot";
                break;
        }

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
        let featured_tall_photo = 'featured-tall-photo'
        let featured_photo = 'featured-photo';
        let featured_show_item_container = 'featured-show-item-container'

        let featured_title = 'featured-title'
        let featured_description = 'featured-description'
        let footer
         if(this.state.hover === true) {
            featured_photo = 'featured-photo-2'
            featured_tall_photo = 'featured-tall-photo-2'
            featured_show_item_container = 'featured-show-item-container-2'
            featured_show_item = `${featured_show_item}${2}`
            featured_title = 'featured-title-2'
            featured_description = 'featured-description-2'
            footer = <div className ='details-buttons-container-featured'> 
                <div>
                    <DetailsButton />
                </div>
                <div>
                    <MyStuffButton />
                </div>
            </div>
         }

            return (
                <div className={featured_show_item_container} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <div className={featured_show_item}>

                    </div>
                    <img className= {featured_tall_photo} src={tallpic} alt=""/>
                    <div className ='featured-second-row' onClick={this.handlePlayVideo} onMouseEnter ={this.handleVidPicEnter} onMouseLeave={this.handleVidPicLeave}>
                        <img  className={featured_photo}src={pic}alt=""/>
                        <i className ={this.state.playhover}> play_arrow </i>
                        <video src={vid} type='video/mp4'></video>
                    </div>
                    <div className= 'featured-info-container'>
                        <div className='featured-info'>
                            <div className={featured_title}>
                                <div className ='featured-title-text'>{title}</div>
                                <div className={featured_description}>
                                    <p> {description}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {footer}
                </div>
            )
    }
}

export default withRouter(FeaturedShow);