# Beaucoup

[Live Link](https://beaucoup.herokuapp.com)
![alt text](https://github.com/jbotoro/markdown_images/blob/master/beaucoupsplash.png)


## Overview

Beaucoup is video streaming web application that aims to be a clone of the popular show streaming service Hulu

![gif1](https://github.com/jbotoro/markdown_images/blob/master/beaucoupgif1.gif)
![gif2](https://github.com/jbotoro/markdown_images/blob/master/beaucoupgif2.gif)

## Technologies 
 
#### Backend
  * PostgreSQL Database
  * Ruby on Rails
  * AWS S3
  
#### Frontend
  * React / Redux
  * JavaScript
  * HTML5
  * CSS3
  
## Features
 
#### Users Auth
   * Users can create and sign in with a unique username and password
   * Password is protected via a Bcrypt hashing algorithm
   ![loginfail](https://github.com/jbotoro/markdown_images/blob/master/failedloginbeaucoup.png)
   
   * Use of the main site is protected via a user auth patern
   ![login](https://github.com/jbotoro/markdown_images/blob/master/beaucouploginform.png)
   
 
#### Main Page 
   * Featured list highlights several shows and has unique UI 
   ![featured](https://github.com/jbotoro/markdown_images/blob/master/beaucoupindexfeatured.png)
   * All videos are fetched from backend and displayed to user
   ![index](https://github.com/jbotoro/markdown_images/blob/master/beaucoupindexshows.png)
   * Users can use NavBar to navigate to everyother feature from here
   ![NavBar](https://github.com/jbotoro/markdown_images/blob/master/logged-in-navbar.png)
#### Video Player
   * Video player has a minimize button that allows users to browse while watching videos
   ![minimized](https://github.com/jbotoro/markdown_images/blob/master/minimizedplayer.png)
   * Video player has customized progress bar that allows for easy rewind /fast-forward and pause functionality
   ![progressbar](https://github.com/jbotoro/markdown_images/blob/master/videoplayerbeaucoup.png)
#### Search
   * Search component allows users to quickly find shows
   ![search](https://github.com/jbotoro/markdown_images/blob/master/beaucoupsearch.png)
#### Browse by Genre
   * Joins table in backend allows for every show to have several genres, allowing users to browse videos by genre
   ![genrebrowse](https://github.com/jbotoro/markdown_images/blob/master/beaucoupbrowsegenres.png)
#### myStuff
   * Users can add or remove shows from their unique myStuff collection
   ![myStuff](https://github.com/jbotoro/markdown_images/blob/master/beaucoupmystuff.png)




