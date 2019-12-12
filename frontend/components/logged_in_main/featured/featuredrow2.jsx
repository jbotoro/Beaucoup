import React from 'react';
import FeaturedSmallDisplay from './featured_small_display';


class FeaturedSecondRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: false
        };
    }


    componentDidMount() {
        this.setState({ mounted: true })
    }



    render() {

        let episodes = this.props.episodes;

        let view = null;
        if (this.state.mounted) {
            episodes
            view = episodes.map((episode) => {
                return (<li key={episode.id}><FeaturedSmallDisplay media={episode} /></li>)
            })
        }


        return (

            <>
                {view}
            </>

        )
    }
}
export default FeaturedSecondRow;