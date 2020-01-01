import React from 'React';
import ShowItem from '../logged_in_main/shows/show_item_container';

class MyStuff extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {

        let row1Shows;
        let row2Shows;
        let row3Shows;
        let row4Shows;
        if(this.props.myStuff && this.props.episodes) {
            let stuff = this.props.myStuff;
            let firstrow = stuff.slice(0, 3)
            let secondrow = stuff.slice(3, 6)
            let thirdrow = stuff.slice(6, 9)
            let fourthrow = stuff.slice(9, 12)
            let stuffepisodes = this.props.episodes;

            
            if(firstrow.length > 0) {
                row1Shows = firstrow.map(show => {
                    
                    let episodes = stuffepisodes.filter(episode => show.id === episode.show_id)
                    console.log(episodes)
                    
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={episodes} key={show.id} />
                    </li>
                    )
                })
            } else {
                row1Shows = null
            }
            if (secondrow.length > 0) {
                row2Shows = secondrow.map(show => {
                   let episodes = stuffepisodes.filter(episode => show.id === episode.show_id)
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={episodes} key={show.id} />
                    </li>
                    )
                })
            } else {
                row2Shows = null;
            }
            if(thirdrow.length > 0) {
                row3Shows = thirdrow.map(show => {
                    let episodes = stuffepisodes.filter(episode => show.id === episode.show_id)
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={episodes} key={show.id} />
                    </li>
                    )
                })
            } else {
                row3Shows = null;
            }
            if(fourthrow.length > 0) {
                row4Shows = fourthrow.map(show => {
                    let episodes = stuffepisodes.filter(episode => show.id === episode.show_id)
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={episodes} key={show.id} />
                    </li>
                    )
                })
            } else {
                row4Shows = null
            }
            
        }
       

        // row1Shows = firstrow.map(show => )



        
        return (
            <div className='genres-main-container'>
                <div className='mystuff-banner-container'>
                    <div className='mystuff-banner-background'></div>
                    <div className='mystuff-banner'>
                        <div className = 'mystuff-banner-text-container'>
                            <div className='mystuff-banner-text'>
                                <h1 className='mystuff-banner-h1'>My Stuff</h1>
                                <p className='mystuff-banner-description'>Use the <i className='material-icons ad-1'>add</i> button to add content you want to keep track of.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='genres-shows-container'>
                    <div className='genres-shows-list-container'>
                        <div className='genres-shows-list-title'>
                            <h2 className='genres-shows-title'>
                                tv shows
                            </h2>

                        </div>
                        <div className='genres-shows-list-container'>
                            <div className='genres-shows-list'>
                                <ul className='logged-shows-ul'>
                                    <div className='row1-shows-wrap'>
                                        {row1Shows}
                                    </div>

                                </ul>
                                <ul className='logged-shows-ul2'>
                                    <div className='row2-shows-wrap'>
                                        {row2Shows}
                                    </div>
                                </ul>
                                <ul className='logged-shows-ul2'>
                                    <div className='row2-shows-wrap'>
                                        {row3Shows}
                                    </div>
                                </ul>
                                <ul className='logged-shows-ul2'>
                                    <div className='row2-shows-wrap'>
                                        {row4Shows}
                                    </div>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default MyStuff