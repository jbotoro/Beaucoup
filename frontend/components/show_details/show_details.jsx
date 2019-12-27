import React from 'React';
import DetailsShowItem from '../logged_in_main/shows/details_show_item_container';
import MastheadPlayButton from '../buttons/masthead_play_button';
import MyStuffButton from '../buttons/mystuff_button_container';

class ShowDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }

        this.closeModal = this.closeModal.bind(this);
    }


    closeModal() {
        this.props.closeModal();
    }








    render() {
        
        let epinfo;
        let showinfo;
        let description;
        let title;
        let tallpic;
        let eppic;
        let year;
        let showid;

        if(this.props.episode && this.props.show){
            epinfo = this.props.episode;
            showinfo = this.props.show;
            eppic = this.props.episode.photo_url
            year = this.props.show.year
            title = this.props.show.title
            description = this.props.show.description
            showid = this.props.show.id
        }
       

        return(
            <div className ='show-details-modal-background'>
                <div className='show-details-modal-vid-height'>

                </div>
                <div className='show-details-modal-headline'>
                    <div className='show-details-modal-header-title'>
                        {title}
                    </div>
                    <div className='show-details-modal-header-close'>
                        <i onClick={this.closeModal}className="material-icons  close-1">clear</i>
                    </div>
                </div>
                <div className='show-details-modal-main-container'>
                    <div className='show-details-modal-header'>
                        <div className ='show-details-modal-header-image-container'>
                            <div className ='show-details-image-mid-container'>
                                <div className = 'show-details-img-background'>

                                </div>
                                <img className='show-details-img'src={eppic} alt=""/>
                            </div>
                            <div className ='show-details-header-info'>
                                <div className='show-details-tall-photo-container'>
                                    <img className='show-details-tall-photo' src={eppic} alt=""/>
                                    {/* {should be tall photo url instead but still need to attach a tall photo to all shows} */}
                                </div>
                                <div className='show-details-additional-info-container'>
                                    <div className='show-details-additional-info'>
                                        <ul className='show-details-additional-info-header'>
                                            <li>
                                                <h3>{title}</h3>
                                            </li>
                                            <li>
                                                <h5>{year}</h5>
                                            </li>
                                            <li>
                                                <h4> {description} </h4>
                                            </li>
                                            <li>
                                                <ul className='show-details-additional-info-buttons'>
                                                    <li className='show-details-additonal-info-playbutton'>
                                                        <MastheadPlayButton video={epinfo}/>
                                                    </li>
                                                    <li>
                                                        <div className='show-details-additional-info-start'>
                                                            START WATCHING
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='show-details-additional-info-mystuff'>
                                                            <MyStuffButton show={showid} />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className='show-details-modal-episodelist-container'>
                        <li>
                            <DetailsShowItem show={showinfo} episodes={epinfo} key={showid} />
                        </li>
                    </ul>
                </div>

            </div>
        )
    }




}

export default ShowDetails;