import React from "React";
import ShowItem from '../logged_in_main/shows/show_item_container';

class Genres extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let genreId = this.props.match.params.genreId;
        this.props.findGenre(genreId);
        this.props.findEpisodes();
    }


    render() {
        let genre;
        let genreshows;

        if(this.props.genre) {
            genre = this.props.genre.genre_type
        }

        if (this.props.shows && this.props.episodes) {

            let episodes = this.props.episodes;


            genreshows = this.props.shows.map((show) => {
                episodes = episodes.filter((episode) => show.id === episode.show_id)
                return <div className='genres-shows-listitem' key={show.id}>
                    <ShowItem  show = {show} episodes ={episodes} genrespage={true}/>
                </div>
            })
        }

        return (
            <div className ='genres-main-container'>
                <div className ='genre-main-title'>
                    <h1 className='genre-title'>
                        {genre}
                    </h1>
                   
                </div>

                <div className='genres-shows-container'>
                    <div className='genres-shows-list-container'>
                        <div className='genres-shows-list-title'>
                            <h2 className='genres-shows-title'>
                                 for you
                            </h2>
                            <i className='material-icons'>
                                chevron_right
                            </i>
                           
                        </div>
                        <div className='genres-shows-list-container'>
                            <div className='genres-shows-list'>
                                <ul className='genres-shows-ul'>
                                    {genreshows}
                                </ul>
                              
                            </div>
                        
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Genres;