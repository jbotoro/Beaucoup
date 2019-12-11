import React from 'react';
// import FeaturedListItem from './featured_item_container';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class featuredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: null,
            hover: false,
            hovervid: 'material-icons fr-1'

        }
    }

    videostart() {
        if (this.props.show.show_id) {
            let info = ["show", this.props.show.id];
            this.props.openModal(info);
        } else if (this.props.show.episode_ids) {
            let info = ["show", this.props.show.episode_ids[0]];
            this.props.openModal(info);
        } else {
            let info = [movie, this.props.movie.id];
            this.props.history.push(info);
        }
    }
    
    handleMouseEffect() {
        setTimeout(() => {
            if (this.state.playhover === "material-icons fr-2") {
                this.setState({ playhover: "material-icons fr-3" });
            }
        }, 100);

    }

    handleHover() {
        this.setState({ playhover: "material-icons fr-3" });
    }

    handleMouseEffectEnd() {
        this.setState({ playhover: "material-icons fr-2" });

    }

    handleMouseEnter() {
        this.setState({ firsthover: true })
        setTimeout(() => {
            if (this.state.firsthover) {
                this.setState({ hover: true, playhover: "material-icons fr-2" });
            }
        }, 200);
    }

    handleMouseLeave() {
        this.setState({ firsthover: false, hover: false, play: null, playhover: "material-icons fr-1" });
    }

    render() {
        let rowcontainer = "firstrowcontainer";
        switch (this.props.show.title) {

            case "My Hero Academia":
                rowcontainer = "firstrowcontainerMyHero";
                break;

            case "Death Note":
                rowcontainer = "firstrowcontainerDeathNote";
                break;
            case "Dragon Ball Super":
                rowcontainer = "firstrowcontainerDragonSuper";
                break;
            case "Attack on Titan":
                rowcontainer = "firstrowcontainerAttack";
                break;
        }

        let firstrowpic = "firstrowpic";
        let firstrowcontainer = "firstrowcontainer";
        let firstTall = "firstTall";
        let tallimage = "tall_image";
        let firstrowtitle = "firstrowtitle";
        let description = "firstrowdescription";
        let year = 'firstrowyear'
        // let footer = null;

        if (this.state.hover === true) {
            firstrowpic = "firstrowpic2";
            rowcontainer = `${rowcontainer}${2}`;
            firstrowcontainer = "firstrowcontainer2";
            firstTall = "firstTall2";
            tallimage = "tall_image2";
            firstrowtitle = "firstrowtitle2";
            description = "firstrowdescription2";
            year = 'firstrowyear2'
            // footer = <div className="bottombuttons">
            //     <div><DetailsButton color="white" content={this.props.show} /></div>
            //     <div><MyStuffButton color="white" content={this.props.show} /></div>
            // </div>
        }

        return (
            <><div className={firstTall} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className={rowcontainer}>

                </div>
                <img className={tallimage} src={this.props.show.tall_photoUrl} />
                <div onClick={this.playvideo} onMouseEnter={this.handleMousePictureenter} onMouseLeave={this.handleMousePictureleave} className="secondrowcontainer">
                    <img className={firstrowpic} src={this.props.show.photoUrl} />
                    <i className={this.state.playhover}>play_arrow</i>
                </div>

                <div className="firstinfocontainer">
                    <div className="firstinfo">
                        <div className={firstrowtitle}>
                            <div>{this.props.show.title}</div>
                            <div className={description}>{this.props.show.description}</div>
                        </div>
                    </div>
                </div>
                {/* {footer} */}

            </div>
            </>
        )
    }

}

//     componentDidMount () {
//         this.props.findMovies()
//         .then( () => {
//             this.setState ({
//                 movies: this.props.movies.map(movie => {return movie})
//             })
//         })
//     }

//     render () {

//         const mapAllMovies = this.state.movies.map(movie => {
//             return (
//                 <FeaturedListItem movie={movie} key={movie.id} />
//             )
//         });
//         const featuredMovies = mapAllMovies.splice(Math.floor(Math.random() * mapAllMovies.length), 3);

//         return (
//             <div className='loggedin-main-featured-wrapper'>
//                 <div className='loggedin-main-featured-container'>
//                     <div className='loggedin-main-featured-item-container'>
//                         {featuredMovies}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
const mapDispatchToProps = (dispatch) => {

    return ({
        openModal: (modal) => dispatch(openModal(modal))

    })


}

export default connect(null, mapDispatchToProps)(featuredList);