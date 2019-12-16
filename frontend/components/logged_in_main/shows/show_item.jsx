import React from 'react';
import { withRouter } from 'react-router-dom';


class showItem extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlayShow = this.handlePlayShow.bind(this);
    }

    componentDidMount() {
        this.props.getShow(this.props.key)
            .then(() => {
                this.setState({
                    episodes: this.props.show.episodes.map(episodes => { episodes })
                })
            })
    }

    handlePlayShow(e) {
        e.preventDefault();
        this.props.history.push(`/shows/${this.props.show.id}`)
    }

    render() {

        const mapAllEpisodes = this.props.show.episode_id.map(show => {
            return (
                <ShowItemContainer show={show} key={show.id} />
            )
        });

        
        return (
            <div className='simple-show-item-container'>
                <div className='simple-show-item'>
                    <button onClick={() => this.handlePlayShow} className='simple-show-item-play-button'>
                        <video src={this.props.show.episode.video}></video>
                        <img src={this.props.show.episode.photo} />
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(showItem);