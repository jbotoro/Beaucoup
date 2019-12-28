

require 'open-uri'

User.delete_all
Episode.delete_all
Show.delete_all
Genre.delete_all


ActiveRecord::Base.connection.reset_pk_sequence!('users');
ActiveRecord::Base.connection.reset_pk_sequence!('shows');
ActiveRecord::Base.connection.reset_pk_sequence!('episodes');
ActiveRecord::Base.connection.reset_pk_sequence!('genres');



demo = User.create!({email:'demo@demo.com', password:'password'})

featured1 = Show.create(
    title: 'My Hero Academia', 
    description: 'A superhero-loving boy without any powers is determined to 
    enroll in a prestigious hero academy and learn what it really means to be a 
    hero.',
    seasons: 4,
    year: 2016, 
    rating: 8.5)
featured1_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/myheroacademiaseason1tall.jpg")
featured1.tall_photo.attach(io: featured1_featurePic, filename: "myheroacademiaseason1tall.jpg")
featured1_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/mha1square.jpg")
featured1.photo.attach(io: featured1_normalPic, filename:'mha1square.jpg')



featured2 = Show.create(title: 'Death Note',
    description:'An intelligent high school student goes on a secret crusade to
     eliminate criminals from the world after discovering a notebook capable of 
     killing anyone whose name is written into it.',
    seasons: 1,
    rating: 9.0,
    year: 2006)
featured2_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnotetall.jpg")
featured2.tall_photo.attach(io: featured2_featurePic, filename:'deathnotetall.jpg')
featured2_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnotesquare.jpg")
featured2.photo.attach(io: featured2_normalPic, filename: 'deathnotesquare.jpg')


featured3 = Show.create(title: 'Dragon Ball Super',
    description: 'Six months after the defeat of Majin Buu, The mighty Saiyan 
    Son Goku continues his quest on becoming stronger.',
    seasons: 1,
    rating: 8.4,
    year: 2015)
featured3_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbzsupertall2.jpg")
featured3.tall_photo.attach(io: featured3_featurePic, filename:'dbzsupertall2.jpg')
featured3_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbzsupersquare.jpg")
featured3.photo.attach(io: featured3_normalPic, filename:'dbzsupersquare.jpg')


featured4 = Show.create(title: 'Attack on Titan',
    description: 'After his hometown is destroyed and his mother is killed, 
    young Eren Yeager vows to cleanse the earth of the giant humanoid Titans 
    that have brought humanity to the brink of extinction.',
    seasons: 4,
    rating: 8.8,
    year: 2013)
featured4_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/attackontitan.jpg")
featured4.photo.attach(io: featured4_pic, filename: 'attackontitan.jpg')
featured4_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/attacktallimg.jpeg")
featured4.tall_photo.attach(io: featured4_featurePic, filename: 'attacktallimg.jpeg')

show2 = Show.create(title:'Hunter x Hunter',
    description:'Gon Freecss aspires to become a Hunter, an exceptional being 
    capable of greatness. With his friends and his potential, he seeks for his 
    father who left him when he was younger.',
    seasons: 1,
    rating: 8.9,
    year:2011)
show2_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterxhunter.jpg")
show2.photo.attach(io: show2_pic, filename: 'hunterxhunter.jpg')
show2_featurePic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterxhuntertall.jpg')
show2.tall_photo.attach(io: show2_featurePic, filename: 'hunterxhuntertall.jpg')

show3 = Show.create(title:'Naruto',
    description:'Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who 
    constantly searches for approval and recognition, as well as to become 
    Hokage, who is acknowledged as the leader and strongest of all ninja in 
    the village.',
    seasons: 1,
    year: 2002,
    rating: 8.5)
show3_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/naruto.jpg")
show3.photo.attach(io: show3_pic, filename: 'naruto.jpg')
show3_featurePic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/narutotall.jpg')
show3.tall_photo.attach(io: show3_featurePic, filename: 'narutotall.jpg')

show4 = Show.create(title: 'One Punch Man',
    description:'The story of Saitama, a hero that does it just for fun & can 
    defeat his enemies with a single punch.',
    seasons: 2,
    rating: 8.9,
    year: 2015)
show4_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/onepunch.jpg")
show4.photo.attach(io: show4_pic, filename:"onepunch.jpg")
show4_featurePic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/onepunchtall.jpg')
show4.tall_photo.attach(io: show4_featurePic, filename: 'onepunchtall.jpg')

show5 = Show.create(title:'Pokemon',
    description:'Follows the adventure of Ash with his Pokemon, Pikachu and his 
    friends to become the Pokemon master.',
    seasons: 23,
    year: 1997,
    rating: 7.4)
show5_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/pokemon.jpg")
show5.photo.attach(io: show5_pic, filename: 'pokemon.jpg')
show5_featurePic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/pokemontall.jpg')
show5.tall_photo.attach(io: show5_featurePic, filename: 'pokemontall.jpg')

show6 = Show.create(title: 'Samurai Champloo',
    description: 'Fuu, a waitress who works in a teahouse, rescues two master 
    swordsmen, Mugen and Jin, from their execution to help her find the 
    "samurai who smells of sunflowers."',
    seasons: 1,
    rating: 8.5,
    year: 2004)
show6_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/champloo.jpg")

show6_pic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/champloonormal.jpg')
show6.photo.attach(io: show6_pic, filename: 'champloonormal.jpg')
show6.tall_photo.attach(io: show6_featurePic, filename: 'champloo.jpg')

show7 = Show.create(title: 'Tokyo Ghoul',
    description:'A Tokyo college student is attacked by a ghoul, a superpowered 
    human who feeds on human flesh. He survives, but has become part ghoul and 
    becomes a fugitive on the run.',
    seasons: 1,
    rating: 7.9,
    year: 2014)
show7_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/tokyoghoul.jpg")
show7.photo.attach(io: show7_pic, filename: 'tokyoghoul.jpg')
show7_featurePic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/tokyoghoultall.jpg')
show7.tall_photo.attach(io: show7_featurePic, filename: 'tokyoghoultall.jpg')

show8 = Show.create(title: 'Neon Genesis Evangelion',
    description:"A teenage boy finds himself recruited as a member of an elite 
    team of pilots by his father.",
    seasons: 1,
    rating: 8.5,
    year: 1995)
show8_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/ngenormal.jpg")
show8.photo.attach(io: show8_pic, filename:"ngenormal.jpg")
show8_featurePic = open('https://beaucoup-dev.s3-us-west-1.amazonaws.com/ngetall.jpg')
show8.tall_photo.attach(io: show8_featurePic, filename: 'ngetall.jpg')


myheroep1 = Episode.create(title:'Izuku Midoriya: Origin',
   description: "Izuku Midoriya desperately wants to be a hero, but he is one of
    the few in his generation born without a Quirk. Will meeting the number one 
    hero, All Might, change his fate?",
    episode_number: 1,
    show_id: 1 )
myhero1_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/MyHero01.m4v")
myheroep1.video.attach(io:  myhero1_video, filename: 'MyHero01.m4v')
myhero1_img = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/myheroep1img.jpg")
myheroep1.photo.attach(io: myhero1_img, filename: 'myheroep1img.jpg')


deathnoteep1 = Episode.create(title: 'Shinsei',
    description: "A brilliant but bored student finds a notebook that can kill 
    anyone whose name he writes in it.",
    episode_number: 1,
    show_id: 2)
deathnotevid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DeathNote01.m4v")
deathnoteep1.video.attach(io: deathnotevid1, filename: 'DeathNote01.m4v')
deathnoteimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnoteep1img.jpg")
deathnoteep1.photo.attach(io: deathnoteimg1, filename: 'deathnoteep1img.jpg')



dragonsuperep1 = Episode.create(title:'A Peacetime Reward: Who Gets the 100,000,000 Zeni?!',
    description: "Goku works in his radish field, but wants to go training and 
    fighting.",
    episode_number: 1,
    show_id: 3)
dragonballvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DragonBallSuper01.mp4")
dragonsuperep1.video.attach(io: dragonballvid1, filename: 'DragonBallSuper01.mp4')
dragonballimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbsuperep1img.jpg")
dragonsuperep1.photo.attach(io: dragonballimg1, filename: 'dbsuperep1img.jpg')



attackep1 = Episode.create(title: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1',
    description: 'For over a century, humans have been living in settlements 
    surrounded by gigantic walls, which prevent the Titans, giant humanoid 
    creatures who eat humans, from entering. Young Eren Yeager wishes to see the
     outside world by joining the Recon Corps, as he likens living in the cities
      to livestock.',
    episode_number: 1,
    show_id: 4)
attackvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/AttackS01E01.m4v")
attackep1.video.attach(io: attackvid1, filename:'AttackS01E01.m4v')
attackimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/attackep1img.jpg")
attackep1.photo.attach(io: attackimg1, filename: 'attackep1img.jpg')




hunterep1 = Episode.create(title:'Departure x and x Friends',
    description: "Twelve-year-old Gon Freecss catches Whale Island's monster 
    fish, the 'Master of the Swamp' to gain permission from his Aunt Mito 
    Freecss to take the Hunter Exam. Aboard the ship going to the location of 
    the examination, Gon impresses the Captain when he predicts a violent storm 
    approaching and meets Leorio and Kurapika.",
    episode_number: 1,
    show_id: 5)
huntervid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/HxH01.mp4")
hunterep1.video.attach(io: huntervid1, filename: 'HxH01.mp4')
hunterimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterep1img.jpg")
hunterep1.photo.attach(io: hunterimg1, filename: 'hunterep1img.jpg')



nartuoep1 = Episode.create(title: 'He Appears! Naruto Uzumaki',
    description: 'Welcome to Konoha, where deadly ninja roam the land and the 
    mischievous Naruto Uzumaki causes trouble everywhere he goes. But when he 
    steals the ancient scroll of sealing, he unleashes a rare power rarely 
    seen in a 12-year-old boy.',
    episode_number: 1,
    show_id: 6)
narutovid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/Naruto01.m4v")
nartuoep1.video.attach(io: narutovid1, filename: 'Naruto01.m4v')
narutoimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/narutoep1img.jpg")
nartuoep1.photo.attach(io: narutoimg1, filename: 'narutoep1img.jpg')




onepunchep1 = Episode.create(title: 'Return of the Hero',
    description: 'Saitama and Genos are out shopping when they come across G4, 
    a demonic robot on a mission to eliminate King. Meanwhile, Sitch attempts to 
    recruit various assassins and villains.',
    episode_number: 1,
    show_id: 7)
onepunchvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/OnePunchMan01.mp4")
onepunchep1.video.attach(io: onepunchvid1, filename: 'OnePunchMan01.mp4')
onepunchimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/onepunchepimg.jpg")
onepunchep1.photo.attach(io: onepunchimg1, filename: 'onepunchepimg.jpg')


pokemonep1 = Episode.create(title: 'Pokémon, I Choose You!',
    description: 'Ash starts his Pokémon journey off to a rough start when he 
    receives his first Pokémon, the reluctant Pikachu.',
    episode_number: 1,
    show_id: 8)
pokemonvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/Pokemon01.mp4")
pokemonep1.video.attach(io: pokemonvid1, filename: 'Pokemon01.mp4')
pokemonimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/pokemonep1img.jpg")
pokemonep1.photo.attach(io: pokemonimg1, filename: 'pokemonep1img.jpg')



champlooep1 = Episode.create(title: 'Tempestuous Temperaments',
    description: 'When two vagrant samurais stumble into waitress Fuu, the three 
    get in trouble with the local magistrate.',
    episode_number: 1,
    show_id: 9)
champloovid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/Champloo01.m4v")
champlooep1.video.attach(io: champloovid1, filename: 'Champloo01.m4v')
champlooimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/champlooep1img.jpg")
champlooep1.photo.attach(io: champlooimg1, filename: 'champlooep1img.jpg')



ghoulep1 = Episode.create(title: 'Tragedy',
    description: 'An ordinary college student named Kaneki encounters Rize, a 
    girl who is an avid reader like him, at the café he frequents. Little does
     he realize that his fate will change overnight.',
    episode_number: 1,
    show_id: 10)
ghoulvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/TokyoGhoul01.mp4")
ghoulep1.video.attach(io: ghoulvid1, filename: 'TokyoGhoul01.mp4')
ghoulimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/tokyoep1img.jpg")
ghoulep1.photo.attach(io: ghoulimg1, filename: 'tokyoep1img.jpg')



neonep1 = Episode.create(title: 'Angel Attack',
    description: "Shinji Ikari, a 14-year-old boy in the city of Tokyo-3, is 
    delivered to the secret organization NERV, where he is requested by his 
    enigmatic father to save the city from an invading creature called an Angel.",
    episode_number: 1,
    show_id: 11)
neonvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/NGE1.m4v")
neonep1.video.attach(io: neonvid1, filename: 'NGE1.m4v')
neonimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/neonep1img.jpg")
neonep1.photo.attach(io: neonimg1, filename: 'neonep1img.jpg')

Genre.create(genre_type: "Action") 
Genre.create(genre_type: "Adventure") 
Genre.create(genre_type: "Cartoons") 
Genre.create(genre_type: "Comedy")
Genre.create(genre_type: "Classics")
Genre.create(genre_type: "Drama")
Genre.create(genre_type: "Family")
Genre.create(genre_type: "Kids")
Genre.create(genre_type: "Horror")
Genre.create(genre_type: "New School")
Genre.create(genre_type: "Old School")
Genre.create(genre_type: "Science Fiction")
Genre.create(genre_type: "Thriller")

GenresJoin.create(show_id: 1, genre_id: 4 )
GenresJoin.create(show_id: 1, genre_id: 10)
GenresJoin.create(show_id: 2, genre_id: 5 )
GenresJoin.create(show_id: 2, genre_id: 10)
GenresJoin.create(show_id: 2, genre_id: 13)
GenresJoin.create(show_id: 3, genre_id: 1)
GenresJoin.create(show_id: 3, genre_id: 2)
GenresJoin.create(show_id: 3, genre_id: 5)
GenresJoin.create(show_id: 3, genre_id: 11)
GenresJoin.create(show_id: 4, genre_id: 6)
GenresJoin.create(show_id: 4, genre_id: 10)
GenresJoin.create(show_id: 5, genre_id: 1)
GenresJoin.create(show_id: 5, genre_id: 2)
GenresJoin.create(show_id: 6, genre_id: 2)
GenresJoin.create(show_id: 6, genre_id: 5)
GenresJoin.create(show_id: 7, genre_id: 4)
GenresJoin.create(show_id: 7, genre_id: 10)
GenresJoin.create(show_id: 7, genre_id: 12)
GenresJoin.create(show_id: 8, genre_id: 2)
GenresJoin.create(show_id: 8, genre_id: 3)
GenresJoin.create(show_id: 8, genre_id: 7)
GenresJoin.create(show_id: 8, genre_id: 8)
GenresJoin.create(show_id: 9, genre_id: 1)
GenresJoin.create(show_id: 9, genre_id: 5)
GenresJoin.create(show_id: 10, genre_id: 6)
GenresJoin.create(show_id: 10, genre_id: 9)
GenresJoin.create(show_id: 11, genre_id: 1)
GenresJoin.create(show_id: 11, genre_id: 5)
GenresJoin.create(show_id: 11, genre_id: 11)
GenresJoin.create(show_id: 11, genre_id: 12)