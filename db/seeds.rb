# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


demo = User.create!({email:'demo@demo.com', password:'password'})

featured1 = Show.create(title: 'My Hero Academia', 
    description: 'A superhero-loving boy without any powers is determined to 
    enroll in a prestigious hero academy and learn what it really means to be a 
    hero.',
    seasons: '4',
    year: 2016,
    rating: 8.5, )
featured1_FeaturePic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/my-hero-academia-season-1-tall.jpg)
featured1.photo.attach(io: featured1_FeaturePic, filename:'my-hero-academia-season-1-tall.jpg' )
featured1_normalPic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/mha1square.jpg)
featured1.photo.attach(io: featured1_normalPic, filename:'mha1square.jpg')

featured2 = Movie.create(title: 'Cowboy Bebop: The Movie',
    description: `A terrorist explosion releases a deadly virus on the masses, 
    and it's up the bounty-hunting Bebop crew to catch the cold-blooded culprit.`
    , rating: 7.9,
    year: 2003 )
featured2_FeaturePic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/cowboy-bebop-the-movie.jpg)
featured2.photo.attach(io: featured2_FeaturePic, filename: 'cowboy-bebop-the-movie.jpg')
featured2_normalPic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/bebopsquare.jpg)
featured2.photo.attach(io: featured2_normalPic, filename: 'bebopsquare.jpg')
featured2_video = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/Cowboy+Bebop+-The+Movie-+%5B2001%5D.mp4)
featured2.video.attach(io: featured2_video, filename:'Cowboy+Bebop+-The+Movie-+%5B2001%5D.mp4')


featured3 = Show.create(title: 'Death Note',
    description:'An intelligent high school student goes on a secret crusade to
     eliminate criminals from the world after discovering a notebook capable of 
     killing anyone whose name is written into it.',
    seasons: 1,
    rating: 9.0,
    year: 2006)
featured3_FeaturePic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnotetall.jpg)
featured3.photo.attach(io: featured3_FeaturePic, filename:'deathnotetall.jpg')
featured3_normalPic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnotesquare.jpg)
featured3.photo.attach(io: featured3_normalPic, filename: 'deathnotesquare.jpg')


featured4 = Show.create(title: 'Dragon Ball Super',
    description: 'Six months after the defeat of Majin Buu, The mighty Saiyan 
    Son Goku continues his quest on becoming stronger.',
    seasons: 1,
    rating: 8.4,
    year: 2015)
featured4_FeaturePic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbzsupertall2.jpg)
featured4.photo.attach(io: featured4_FeaturePic, filename:'dbzsupertall2.jpg')
featured4_normalPic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbzsupersquare.jpg)
featured4.photo.attach(io: featured4_normalPic, filename:'dbzsupersquare.jpg')


show1 = Show.create(title: 'Attack on Titan',
    description: 'After his hometown is destroyed and his mother is killed, 
    young Eren Yeager vows to cleanse the earth of the giant humanoid Titans 
    that have brought humanity to the brink of extinction.',
    seasons: 4,
    rating: 8.8,
    year: 2013)
show1_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/attackontitan.jpg)
show1.photo.attach(io: show1_pic, filename: 'attackontitan.jpg')

show2 = Show.create(title:'Hunter x Hunter',
    description:'Gon Freecss aspires to become a Hunter, an exceptional being 
    capable of greatness. With his friends and his potential, he seeks for his 
    father who left him when he was younger.',
    seasons: 1,
    rating: 8.9,
    year:2011)
show2_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterxhunter.jpg)
show2.photo.attach(io: show2_pic, filename: 'hunterxhunter.jpg')

show3 = Show.create(title:'Naruto',
    description:'Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who 
    constantly searches for approval and recognition, as well as to become 
    Hokage, who is acknowledged as the leader and strongest of all ninja in 
    the village.',
    seasons: 1,
    year: 2007,
    rating: 8.5)
show3_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/naruto.jpg)
show3.photo.attach(io: show3_pic, filename: 'naruto.jpg')

show4 = Show.create(title: 'One Punch Man',
    description:'The story of Saitama, a hero that does it just for fun & can 
    defeat his enemies with a single punch.',
    seasons: 2,
    rating: 8.9,
    year: 2015)
show4_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/onepunch.jpg)
show4.photo.attach(io: show4_pic, filename:"onepunch.jpg")

show5 = Show.create(title:'Pokemon',
    description:'Follows the adventure of Ash with his Pokemon, Pikachu and his 
    friends to become the Pokemon master.',
    seasons: 23,
    year: 1997,
    rating: 7.4)
show5_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/pokemon.jpg)
show5.photo.attach(io: show5_pic, filename: 'pokemon.jpg')

show6 = Show.create(title: 'Samurai Champloo',
    description: 'Fuu, a waitress who works in a teahouse, rescues two master 
    swordsmen, Mugen and Jin, from their execution to help her find the 
    "samurai who smells of sunflowers."',
    seasons: 1,
    rating: 8.5,
    year: 2004)
show6_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/champloo.jpg)
show6.photo.attach(io: show6_pic, filename: 'champloo.jpg')

show7 = Show.create(title: 'Tokyo Ghoul',
    description:'A Tokyo college student is attacked by a ghoul, a superpowered 
    human who feeds on human flesh. He survives, but has become part ghoul and 
    becomes a fugitive on the run.',
    seasons: 1,
    rating: 7.9,
    year: 2014)
show7_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/tokyoghoul.jpg)
show7.photo.attach(io: show7_pic, filename: 'tokyoghoul.jpg')

show8 = Show.create(title: 'Neon Genesis Evangelion',
    description:'A teenage boy finds himself recruited as a member of an elite 
    team of pilots by his father.',
    seasons: 1,
    rating: 8.5,
    year: 1995)
show8_pic = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/neongenesis.jpg)
show8.photo.attach(io: show8_pic, filename:"neongenesis.jpg")

movie1 = Movie.create(title:'Digimon: The Movie',
    description:'Three different stories involving digital creatures collide 
    together.',
    rating:6.1,
    year: 2000)
movie1_video = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/Digimon+The+Movie+++%5BDarkDream%5D.mkv)
movie1.video.attach(io: movie1_video, filename:'Digimon+The+Movie+++%5BDarkDream%5D.mkv')

movie2 = Movie.create(title: 'Your Name',
    description:'Two strangers find themselves linked in a bizarre way. When a 
    connection forms, will distance be the only thing to keep them apart?',
    rating: 8.4,
    year: 2017)
movie2_video = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/kimi-no-na-wa-2016-hdrip-720p-hc-eng-sub-aac-x264.mp4)
movie2.video.attach(io: movie2_video, filename:'kimi-no-na-wa-2016-hdrip-720p-hc-eng-sub-aac-x264.mp4')

movie3 = Movie.create(title:"Pokemon: The First Movie",
    description:'Scientists genetically create a new Pokémon, Mewtwo, but the 
    results are horrific and disastrous.',
    rating: 6.2,
    year: 1999)
movie3_video = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/Pokemon+S01M01+The+First+Movie+Mewtwo+Strikes+Back+%5BExtended%2C+Japanese+Credits%5D+(1998+360p+re-blurip).mp4)
movie3.video.attach(io: movie3_video, filename: 'Pokemon+S01M01+The+First+Movie+Mewtwo+Strikes+Back+%5BExtended%2C+Japanese+Credits%5D+(1998+360p+re-blurip).mp4')

# episodes
# myhero
# death note
# dragon ball sup

myheroep1 = Episode.create(title:'Izuku Midoriya: Origin',
   description: 'Izuku Midoriya desperately wants to be a hero, but he is one of
    the few in his generation born without a Quirk. Will meeting the number one 
    hero, All Might, change his fate?',
    episode_number: 1,
    show_id: 1 )






episode1_video = open(https://beaucoup-dev.s3-us-west-1.amazonaws.com/My+Hero+Academia+Ep.01.mkv)
