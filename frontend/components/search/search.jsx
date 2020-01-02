import React from 'react';
import ShowItem from '../logged_in_main/shows/show_item_container';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchinput: '',
            searching: false
        }

        this.submitSearch= this.submitSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {
        this.props.findShows();
        this.props.findEpisodes();
    }

    submitSearch() {
        this.setState({ searching: true})
    }

    handleSearch(e) {
        this.setState({ searchinput: e.target.value, searching: true})
    }

    handleClear() {
        this.setState({ searchinput: '', searching: false})
    }

    render() {
        let genrelist;
        let showslist;
        let episodeslist;
        let displayedShows = null
        let displayedEpisodes = this.props.episodes;
        let searchErrors = null;
        let ul1 = 'logged-shows-ul';
        let ul2 = 'logged-shows-ul-2';
        let ul3 = 'logged-shows-ul-2';
        let ul4 = 'logged-shows-ul-2';
        let noresults = false;
        
        let searchResShows = [];
        
        let currentSearch = this.state.searchinput
        let row1Results = null
        let row2Results = null
        let row3Results = null
        let row4Results = null
        let searchingForContainer = null;
        if(this.props.episodes && this.props.shows && this.props.genres) {
            genrelist = this.props.genres
            showslist = this.props.shows
            episodeslist = this.props.episodes

         

           
                showslist.forEach(show => {
                    
                    let title = show.title.split(' ')
                    let result = false
                    let query = title.filter(word => {
                        
                        for (let i = 0; i < currentSearch.length && i < word.length; i++) {
                              
                            if (currentSearch[i].toLowerCase() !== word[i].toLowerCase()) {
                                
                              
                                return false
                    
                            } 
                           
                        }
                        if(currentSearch.length === 0) {
                            return false
                        }
                        return true
                       
                        
                        
                    })
                    if (query.length > 0) {
                        
                     
                        searchResShows.push(show)
                       
                       

                    }
                   
                })
            
           
        }

        if(this.state.searching) {
          displayedShows = searchResShows
        }
        if( displayedShows && displayedShows.length > 0) {
            
            let firstthree = displayedShows.slice(0,3)
            let secondthree = displayedShows.slice(3,6)
            let thirdthree = displayedShows.slice(6,9)
            let fourththree = displayedShows.slice(9,12)



            row1Results = firstthree.map(show => {
                let episodes = displayedEpisodes.filter(episode => show.id === episode.show_id)
                return (<li className='genres-shows-listitem'>
                    <ShowItem show={show} episodes={episodes} key={show.id} />
                </li>
                )
            })
            row2Results = secondthree.map(show => {
                let episodes = displayedEpisodes.filter(episode => show.id === episode.show_id)
                return (<li className='genres-shows-listitem'>
                    <ShowItem show={show} episodes={episodes} key={show.id} />
                </li>
                )
            })
            row3Results = thirdthree.map(show => {
                let episodes = displayedEpisodes.filter(episode => show.id === episode.show_id)
                return (<li className='genres-shows-listitem'>
                    <ShowItem show={show} episodes={episodes} key={show.id} />
                </li>
                )
            })
            row4Results = fourththree.map(show => {
                let episodes = displayedEpisodes.filter(episode => show.id === episode.show_id)
                return (<li className='genres-shows-listitem'>
                    <ShowItem show={show} episodes={episodes} key={show.id} />
                </li>
                )
            })
        }

       

        if (this.state.searchinput.length > 0  && (!displayedShows || displayedShows.length ===0)) {
            
            if (displayedShows.length === 0 || !displayedShows) {
                noresults = true
                searchErrors = <div className="search-bar-noresults-container">
                    <div className="search-bar-fail">0 results matching your search were found.</div>
                    <div className="search-bar-fail-2">Check your spelling or try another term.</div>
                </div>
            } else {
                searchErrors = <div></div>
                noresults = false
            }
            
                
        }

        if(row1Results === null) {
            ul1 = 'logged-shows-ul-invis'
        }
        if(row2Results === null) {
            ul2= 'logged-shows-ul-invis'
        }
        if(row3Results === null) {
            ul3 = 'logged-shows-ul-invis'
        }
        if(row4Results === null) {
            ul4 = 'logged-shows-ul-invis'
        }

        let searchclear ='search-bar-clear--hidden'

        if(this.state.searchinput.length > 0 && this.state.searching){
            
            searchingForContainer = <div className='searching-for-container'>
                <i className='material-icons searching-1'>
                    search
                </i>
                <span className='searching-for-pretext'> Search for </span>
                <span className='searching-for-title'> "{this.state.searchinput}"</span>
            </div>
            
        }
        if(this.state.searchinput.length > 0){
            searchclear = 'search-bar-clear'
        } else {
            searchclear = 'search-bar-clear--hidden'
        }

        let showscontainer = null

        if(noresults === false){
            showscontainer = 
              <div className="search-shows-container">
                <div className="genres-shows-list-container">
                  <div className="search-shows-list-title">
                    <h2 className="genres-shows-title">search results</h2>
                  </div>
                  <div className="search-shows-list-container">
                    <div className="genres-shows-list">
                      <ul className={ul1}>
                        <div className="row1-shows-wrap">{row1Results}</div>
                      </ul>
                      <ul className={ul2}>
                        <div className="row2-shows-wrap">{row2Results}</div>
                      </ul>
                      <ul className={ul3}>
                        <div className="row2-shows-wrap">{row3Results}</div>
                      </ul>
                      <ul className={ul4}>
                        <div className="row2-shows-wrap">{row4Results}</div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
        }

       
        
        
        

        return(
            <div className='genres-main-container'>
                <div className='search-bar-container'>
                    <form className='search-bar-form' onSubmit={this.submitSearch}>
                        <input type="text" className="search-bar-input" placeholder="Search" value ={this.state.searchinput} onChange={this.handleSearch} id=""/>
                        <div className ={searchclear} onClick ={this.handleClear}>
                            Clear
                        </div>

                    </form>
                    {searchingForContainer}
                    {/* <div className='mystuff-banner-background'></div>
                    <div className='mystuff-banner'>
                        <div className='mystuff-banner-text-container'>
                            <div className='mystuff-banner-text'>
                                <h1 className='mystuff-banner-h1'>My Stuff</h1>
                                <p className='mystuff-banner-description'>Use the <i className='material-icons ad-1'>add</i> button to add content you want to keep track of.</p>
                            </div>
                        </div>
                    </div> */}

                </div>
                {searchErrors}
                {showscontainer}
            </div>
        )
        
        
    }
}

export default SearchBar