import React from 'react';
import { withRouter } from 'react-router-dom';


class showItem extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlayShow = this.handlePlayShow.bind(this);
    }

    handlePlayShow(e) {
        e.preventDefault();
        this.props.history.push(`/videos/shows/${this.props.show.id}`)
    }

    render() {
        return (
            <div className='simple-show-item-container'>
                <div className='simple-show-item'>
                    <button onClick={() => this.handlePlayShow} className='simple-show-item-play-button'>
                        <video src={this.props.show.video_url}></video>
                        <img src={this.props.show.image_url} />
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(showItem);