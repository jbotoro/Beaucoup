import React from "react";

import { openModal } from '../../../actions/modal_actions';
import { connect } from "react-redux";
// import DetailsButton from "../buttons/details_button";
// import MyStuffButton from "../buttons/mystuff_button";



class FeaturedSmallDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            photohover: false
        };
        this.wholeMouseEnterHandler = this.wholeMouseEnterHandler.bind(this);
        this.wholeMouseLeaveHandler = this.wholeMouseLeaveHandler.bind(this);
        this.photoMouseEnterHandler = this.photoMouseEnterHandler.bind(this);
        this.photoMouseLeaveHandler = this.photoMouseLeaveHandler.bind(this);
        this.playvideo = this.playvideo.bind(this);
    }


    playvideo() {



        if (this.props.media.show_id) {
            let info = ["show", this.props.media.id];
            this.props.openModal(info);
        } else if (this.props.media.episode_ids) {
            let info = ["show", this.props.media.episode_ids[0]];
            this.props.openModal(info);
        } else {
            let info = [movie, this.props.media.id];
            this.props.history.push(info);
        }
    }

    wholeMouseEnterHandler() {
        this.setState({ hover: true });
    }

    wholeMouseLeaveHandler() {
        this.setState({ hover: false });
    }

    photoMouseEnterHandler() {
        this.setState({ photohover: true });
    }

    photoMouseLeaveHandler() {
        this.setState({ photohover: false });
    }



    render() {

        let smallDisplayContainer = "SmallDisplayContainer";
        let smalldisplayexpandable = "smalldisplayexpandable";
        let episodeDescription = "episodeDescription";
        let materialicon = "material-icons ds-1";
        let smalldisplayplaybuttoncontainer = "smalldisplayplaybuttoncontainer";
        let smallmedia = null;
        let buttons = null;

        if (this.state.hover) {
            smallDisplayContainer = "SmallDisplayContainer2";
            smalldisplayexpandable = "smalldisplayexpandable2";
            episodeDescription = "episodeDescription2";
            smalldisplayplaybuttoncontainer = "smalldisplayplaybuttoncontainer2";
            materialicon = "material-icons ds-2";
        }

        if (this.state.photohover) {
            materialicon = "material-icons ds-3";
        }

        if (this.props.media.show_id) {
            smallmedia =
                <div className="episodeNumber">EPISODE {this.props.media.episode_number}</div>
        } else {
            buttons = <div className="bottombuttonssmall">
                {/* <div><DetailsButton color="black" media={this.props.media} /></div>
                <div><MyStuffButton color="black" media={this.props.media} /></div> */}
            </div>
        }



        return (
            <div className='smalldisplayanchor'>
                <div onMouseEnter={this.wholeMouseEnterHandler} onMouseLeave={this.wholeMouseLeaveHandler} className={smallDisplayContainer}>
                    <div className={smalldisplayexpandable}>
                        <div onClick={this.playvideo} onMouseEnter={this.photoMouseEnterHandler} onMouseLeave={this.photoMouseLeaveHandler} className="smalldisplayimagecontainer">
                            <img className="smalldisplayimage" src={this.props.media.photoUrl} alt="" />
                        </div>
                        <div onClick={this.playvideo} className={smalldisplayplaybuttoncontainer}>
                            <div>
                                <i className={materialicon}>play_arrow</i>
                            </div>
                        </div>
                        <div className="smalldisplaymedia">
                            <div className="smalldisplayUL">
                                {smallmedia}
                                <div className="episodeTitle">{this.props.media.title}</div>
                                <div className={episodeDescription}>{this.props.media.description}</div>
                                <div>{buttons}</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        )



    }




}


const mapDispatchToProps = (dispatch) => {

    return ({
        openModal: (modal) => dispatch(openModal(modal))

    })


}


export default (connect(null, mapDispatchToProps)(FeaturedSmallDisplay));