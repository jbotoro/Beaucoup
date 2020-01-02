import React from 'react';
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
        let ul1 = 'logged-shows-ul'
        let ul2 = 'logged-shows-ul-2'
        let ul3 = 'logged-shows-ul-3'
        let ul4 = 'logged-shows-ul-4'
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
                    
                    
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={episodes} key={show.id} />
                    </li>
                    )
                })
            } else {
                row1Shows = null
                ul1 = 'logged-shows-ul--hidden'
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
                ul2 = 'logged-shows-ul-2--hidden'
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
                ul3 = 'logged-shows-ul-3--hidden'
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
                ul4 = 'logged-shows-ul-4--hidden'
            }
            
        }

       

       



        
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
                                <ul className={ul1}>
                                    <div className='row1-shows-wrap'>
                                        {row1Shows}
                                    </div>

                                </ul>
                                <ul className={ul2}>
                                    <div className='row2-shows-wrap'>
                                        {row2Shows}
                                    </div>
                                </ul>
                                <ul className={ul3}>
                                    <div className='row2-shows-wrap'>
                                        {row3Shows}
                                    </div>
                                </ul>
                                <ul className={ul4}>
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