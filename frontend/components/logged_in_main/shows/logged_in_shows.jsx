import React from 'react';
import ShowItemContainer from './show_item_container';

class loggedInShows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: []
        }
    }

    render() {

        const mapAllShows = this.state.shows.map(show => {
            return (
                <ShowItemContainer show={show} key={show.id}/>
            )
        });

        const displayedShows = mapAllShows.slice(0,3)
        return (
            <div className='logged-shows-main-wrapper'>
                <div className="logged-shows-main-container">
                    <ul className='logged-shows-main-items-container'>
                        {displayedShows}
                    </ul>
                </div>
            </div>
        )
    }
}

export default loggedInShows;