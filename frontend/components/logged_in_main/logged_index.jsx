import React from 'react';
import ShowItem from './shows/show_item_container'
import FeaturedShow from './featured/featured_show_container';
import MastheadShow from './shows/masthead_show'


class LoggedInMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
     
        }
   }

    componentDidMount() {
        this.props.findShows();
        this.props.findMovies();
        this.props.findEpisodes();

    }

    




    render () {
        let featured
   
        let shows
        shows = this.props.shows
       
        let row1;
        
        // row1 = this.props.shows.slice(4)
        
        let row2;
       
        // row2 = this.props.shows

        let masthead
       
        let featuredShows;
        let row1Shows;
        let row2Shows;
        let episodeslist;
        let mastheadShow;
        episodeslist = this.props.episodes;
        if( shows.length && episodeslist.length > 0) {
            featured = this.props.shows.slice(0,4)
            console.log(featured)
            featuredShows = featured.map((show) => {
              
                let content
                content = episodeslist.filter(episode => show.id === episode.show_id)
                return (<li className ='featured-li'><FeaturedShow show={show} episodes={content} key={show.id} /></li>
                )
            
            })
            row1 = this.props.shows.slice(4, 7)
            console.log(row1)
            row1Shows = row1.map((show) => {
                let row1content;
                row1content = episodeslist.filter(episode => show.id === episode.show_id)
                return (
                    <li className='loggedshow-li'>
                        <ShowItem show={show} episodes={row1content} key={show.id} />
                    </li>
                )
            })
            row2 = this.props.shows.slice(7, 10);
            console.log(row2)
            row2Shows = row2.map((show) => {
                let row2content;
                row2content = episodeslist.filter(episode => show.id === episode.show_id)
                return (
                    <li className='loggedshow-li'>
                        <ShowItem show={show} episodes={row2content} key={show.id} />
                    </li>
                )
            })
            masthead = this.props.shows[10]
            mastheadShow = <MastheadShow show={masthead} />
                
    
    
           
          
        }

        
       
        
        return (
            <div className="loggedin-main-hub">
                <div className="masthead-main">
                    <div className="masthead-details">
                        {mastheadShow}
                        <div className="masthead-details-links">
                        </div>
                    </div>
                </div>
                <div className="postmasthead-hub-container">
                   
                   <div className='featurelist-container'>
                       <ul className='featured-ul'>
                            {featuredShows}
                       </ul>
                        
                   </div>
                   <div className='row1-shows-container'>
                        <ul className ='logged-shows-ul'>
                            <div className='logged-shows-header'>Shows</div>
                            <div className='row1-shows-wrap'>
                                {row1Shows}
                            </div>
                           
                        </ul>
                        <ul className='logged-shows-ul2'>
                            <div className ='logged-shows-header'> More Shows</div>
                            <div className='row2-shows-wrap'>
                                {row2Shows}
                            </div>
                        </ul>
                   </div>
                </div>
            </div>
                    
        )
    }
}
export default LoggedInMain;
