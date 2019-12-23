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
        return(
            <div className ='show-details-modal-background'>
                <div className='show-details-modal-vid-height'>

                </div>
                <div className='show-details-modal-headline'>
                    <div className='show-details-modal-header-title'>

                    </div>
                    <div className='show-details-modal-header-close'>
                        <i className="material-icons">clear</i>
                    </div>
                </div>
                <div className='show-details-modal-main-container'>
                    <div className='show-details-modal-header'>
                        <div className ='show-details-modal-header-image-container'>
                            <div className ='show-details-image-mid-container'>
                                <div className ='show-details-header-image'>
                                    <img clasName='show-details-img'src={this.props.episode.photo_url} alt=""/>
                                </div>
                                <div className='show-details-image-background'>

                                </div>
                            </div>
                            <div className ='show-details-header-info'>
                                <div className='show-details-tall-photo-container'>
                                    {/* <img className='show-details-tall-photo' src={this.props.episode.tallphoto_url} alt=""/> */}
                                </div>
                                <div className='show-details-additional-info-container'>
                                    <div className='show-details-additional-info'>
                                        <ul className='show-details-additional-info-header'>
                                            <li>
                                                <h3>{this.props.show.title}</h3>
                                            </li>
                                            <li>
                                                <h5>{this.props.show.year}</h5>
                                            </li>
                                            <li>
                                                <h4> {this.props.show.description} </h4>
                                            </li>
                                            <li>
                                                <ul className='show-details-additional-info-buttons'>
                                                    <li className='show-details-additonal-info-playbutton'>
                                                        <MastheadPlayButton video={this.props.episode}/>
                                                    </li>
                                                    <li>
                                                        <div className='show-details-additional-info-start'>
                                                            START WATCHING
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='show-details-additional-info-mystuff'>
                                                            <MyStuffButton show={this.props.show.id} />
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
                            <DetailsShowItem show={this.props.show} episodes={this.props.episode} key={this.props.show.id} />
                        </li>
                    </ul>
                </div>

            </div>
        )
    }




}

export default ShowDetails