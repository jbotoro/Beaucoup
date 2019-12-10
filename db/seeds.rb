# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Episode.delete_all
Show.delete_all
Movie.delete_all



demo = User.create!({email:'demo@demo.com', password:'password'})

featured1 = Show.create(
    title: 'My Hero Academia', 
    description: 'A superhero-loving boy without any powers is determined to 
    enroll in a prestigious hero academy and learn what it really means to be a 
    hero.',
    seasons: 4,
    year: 2016,
    rating: 8.5)
    puts "show 1"
featured1_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/myheroacademiaseason1tall.jpg")
puts "show 2"
featured1.tall_photo.attach(io: featured1_featurePic, filename:'myheroacademiaseason1tall.jpg' )
puts "show 3"
featured1_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/mha1square.jpg")
featured1.photo.attach(io: featured1_normalPic, filename:'mha1square.jpg')

featured2 = Movie.create(title: 'Cowboy Bebop: The Movie',
    description: `A terrorist explosion releases a deadly virus on the masses, 
    and it's up the bounty-hunting Bebop crew to catch the cold-blooded culprit.`, 
    rating: 7.9,
    year: 2003 )
    puts "movie 1"
featured2_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/cowboybebopthemovie.jpg")
featured2.tall_photo.attach(io: featured2_featurePic, filename: 'cowboybebopthemovie.jpg')
featured2_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/bebopsquare.jpg")
featured2.photo.attach(io: featured2_normalPic, filename: 'bebopsquare.jpg')
featured2_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/CowboyBebopMovie.mp4")
featured2.video.attach(io: featured2_video, filename:'CowboyBebopMovie.mp4')
puts "movie 2"


featured3 = Show.create(title: 'Death Note',
    description:'An intelligent high school student goes on a secret crusade to
     eliminate criminals from the world after discovering a notebook capable of 
     killing anyone whose name is written into it.',
    seasons: 1,
    rating: 9.0,
    year: 2006)
featured3_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnotetall.jpg")
featured3.tall_photo.attach(io: featured3_featurePic, filename:'deathnotetall.jpg')
featured3_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnotesquare.jpg")
featured3.photo.attach(io: featured3_normalPic, filename: 'deathnotesquare.jpg')


featured4 = Show.create(title: 'Dragon Ball Super',
    description: 'Six months after the defeat of Majin Buu, The mighty Saiyan 
    Son Goku continues his quest on becoming stronger.',
    seasons: 1,
    rating: 8.4,
    year: 2015)
featured4_featurePic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbzsupertall2.jpg")
featured4.tall_photo.attach(io: featured4_featurePic, filename:'dbzsupertall2.jpg')
featured4_normalPic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbzsupersquare.jpg")
featured4.photo.attach(io: featured4_normalPic, filename:'dbzsupersquare.jpg')


show1 = Show.create(title: 'Attack on Titan',
    description: 'After his hometown is destroyed and his mother is killed, 
    young Eren Yeager vows to cleanse the earth of the giant humanoid Titans 
    that have brought humanity to the brink of extinction.',
    seasons: 4,
    rating: 8.8,
    year: 2013)
show1_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/attackontitan.jpg")
show1.photo.attach(io: show1_pic, filename: 'attackontitan.jpg')

show2 = Show.create(title:'Hunter x Hunter',
    description:'Gon Freecss aspires to become a Hunter, an exceptional being 
    capable of greatness. With his friends and his potential, he seeks for his 
    father who left him when he was younger.',
    seasons: 1,
    rating: 8.9,
    year:2011)
show2_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterxhunter.jpg")
show2.photo.attach(io: show2_pic, filename: 'hunterxhunter.jpg')

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

show4 = Show.create(title: 'One Punch Man',
    description:'The story of Saitama, a hero that does it just for fun & can 
    defeat his enemies with a single punch.',
    seasons: 2,
    rating: 8.9,
    year: 2015)
show4_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/onepunch.jpg")
show4.photo.attach(io: show4_pic, filename:"onepunch.jpg")

show5 = Show.create(title:'Pokemon',
    description:'Follows the adventure of Ash with his Pokemon, Pikachu and his 
    friends to become the Pokemon master.',
    seasons: 23,
    year: 1997,
    rating: 7.4)
show5_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/pokemon.jpg")
show5.photo.attach(io: show5_pic, filename: 'pokemon.jpg')

show6 = Show.create(title: 'Samurai Champloo',
    description: 'Fuu, a waitress who works in a teahouse, rescues two master 
    swordsmen, Mugen and Jin, from their execution to help her find the 
    "samurai who smells of sunflowers."',
    seasons: 1,
    rating: 8.5,
    year: 2004)
show6_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/champloo.jpg")
show6.photo.attach(io: show6_pic, filename: 'champloo.jpg')

show7 = Show.create(title: 'Tokyo Ghoul',
    description:'A Tokyo college student is attacked by a ghoul, a superpowered 
    human who feeds on human flesh. He survives, but has become part ghoul and 
    becomes a fugitive on the run.',
    seasons: 1,
    rating: 7.9,
    year: 2014)
show7_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/tokyoghoul.jpg")
show7.photo.attach(io: show7_pic, filename: 'tokyoghoul.jpg')

show8 = Show.create(title: 'Neon Genesis Evangelion',
    description:'A teenage boy finds himself recruited as a member of an elite 
    team of pilots by his father.',
    seasons: 1,
    rating: 8.5,
    year: 1995)
show8_pic = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/neongenesis.jpg")
show8.photo.attach(io: show8_pic, filename:"neongenesis.jpg")

movie1 = Movie.create(title:'Digimon: The Movie',
    description:'Three different stories involving digital creatures collide 
    together.',
    rating:6.1,
    year: 2000)
movie1_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DigimonTheMovie.mkv")
movie1.video.attach(io: movie1_video, filename:'DigimonTheMovie.mkv')

movie2 = Movie.create(title: 'Your Name',
    description:'Two strangers find themselves linked in a bizarre way. When a 
    connection forms, will distance be the only thing to keep them apart?',
    rating: 8.4,
    year: 2017)
movie2_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/yourname.mp4")
movie2.video.attach(io: movie2_video, filename:'yourname.mp4')

movie3 = Movie.create(title:"Pokemon: The First Movie",
    description:'Scientists genetically create a new Pokémon, Mewtwo, but the 
    results are horrific and disastrous.',
    rating: 6.2,
    year: 1999)
movie3_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/PokemonMovie.mp4")
movie3.video.attach(io: movie3_video, filename: 'PokemonMovie.mp4')


myheroep1 = Episode.create(title:'Izuku Midoriya: Origin',
   description: 'Izuku Midoriya desperately wants to be a hero, but he is one of
    the few in his generation born without a Quirk. Will meeting the number one 
    hero, All Might, change his fate?',
    episode_number: 1,
    show_id: 1 )
myhero1_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/MyHeroAcademia01.mkv")
myheroep1.video.attach(io:  myhero1_video, filename: 'MyHeroAcademia01.mkv')
myhero1_img = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/myheroep1img.jpg")
myheroep1.photo.attach(io: myhero1_img, filename: 'myheroep1img.jpg')

myheroep2 = Episode.create(title:'What It Takes to Be a Hero',
    description: `Izuku accidentally learns of All Might's secret, but there's 
    trouble in town again before Izuku has time to process it. Will All Might be
     able to save the day again?`,
    episode_number: 2,
    show_id: 1)
myhero2_video = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/MyHeroAcademia02.mkv")
myheroep2.video.attach( io: myhero2_video, filename: 'MyHeroAcademia02.mkv')
myhero2_img = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/myheroep2img.jpg")
myheroep2.photo.attach(io: myhero2_img, filename: 'myheroep2img.jpg')

deathnoteep1 = Episode.create(title: 'Shinsei',
    description: 'A brilliant but bored student finds a notebook that can kill 
    anyone whose name he writes in it.',
    episode_number: 1,
    show_id: 2)
deathnotevid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DeathNote01.mkv")
deathnoteep1.video.attach(io: deathnotevid1, filename: 'DeathNote01.mkv')
deathnoteimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnoteep1img.jpg")
deathnoteep1.photo.attach(io: deathnoteimg1, filename: 'deathnoteep1img.jpg')


deathnoteep2 = Episode.create(title: 'Confrontation',
    description: `While the world's criminals continue to drop dead, L meets by
     computer with representatives from various nations. He requests that a task
      force be set up in Japan.`,
    episode_number: 2,
    show_id: 2)
deathnotevid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DeathNote02.mkv")
deathnoteep2.video.attach(io: deathnotevid2, filename: 'DeathNote02.mkv')
deathnoteimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/deathnoteep2img.jpg")
deathnoteep2.photo.attach(io: deathnoteimg2, filename: 'deathnoteep2img.jpg')


dragonsuperep1 = Episode.create(title:'A Peacetime Reward: Who Gets the 100,000,000 Zeni?!',
    description: 'Goku works in his radish field, but wants to go training and 
    fighting.',
    episode_number: 1,
    show_id: 3)
dragonballvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DragonBallSuper01.mp4")
dragonsuperep1.video.attach(io: dragonballvid1, filename: 'DragonBallSuper01.mp4')
dragonballimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbsuperep1img.jpg")
dragonsuperep1.photo.attach(io: dragonballimg1, filename: 'dbsuperep1img.jpg')


dragonsuperep2 = Episode.create(title:'To the Promised Resort! Vegeta Takes a Family Trip!',
    description: 'Vegeta, Bulma and Trunks take a family trip.',
    episode_number: 2,
    show_id: 3)
dragonballvid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/DragonBallSuper02.mkv")
dragonsuperep2.video.attach(io: dragonballvid2, filename: 'DragonBallSuper02.mkv')
dragonballimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/dbsuperep2img.jpg")
dragonsuperep2.photo.attach(io: dragonballimg2, filename: 'dbsuperep2img.jpg')


attackep1 = Episode.create(title: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1',
    description: 'For over a century, humans have been living in settlements 
    surrounded by gigantic walls, which prevent the Titans, giant humanoid 
    creatures who eat humans, from entering. Young Eren Yeager wishes to see the
     outside world by joining the Recon Corps, as he likens living in the cities
      to livestock.',
    episode_number: 1,
    show_id: 4)
attackvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/AttackOnTitan01.mkv")
attackep1.video.attach(io: attackvid1, filename:'AttackOnTitan01.mkv')
attackimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/attackep1img.jpg")
attackep1.photo.attach(io: attackimg1, filename: 'attackep1img.jpg')



attackep2 = Episode.create(title: 'That Day: The Fall of Shiganshina, Part 2',
    description: 'After the Titans break through the wall, the citizens of 
    Shiganshina must run for their lives. Those that do make it to safety find 
        a harsh life waiting for them, however.',
    episode_number: 2,
    show_id: 4)
attackvid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/AttackOnTitan02.mkv")
attackep2.video.attach(io: attackvid2, filename: 'AttackOnTitan02.mkv')
attackimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/attackep2img.jpg")
attackep2.photo.attach(io: attackimg2, filename: 'attackep2img.jpg')


hunterep1 = Episode.create(title:'Departure x and x Friends',
    description: `Twelve-year-old Gon Freecss catches Whale Island's monster 
    fish, the "Master of the Swamp" to gain permission from his Aunt Mito 
    Freecss to take the Hunter Exam. Aboard the ship going to the location of 
    the examination, Gon impresses the Captain when he predicts a violent storm 
    approaching and meets Leorio and Kurapika.`,
    episode_number: 1,
    show_id: 5)
huntervid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/HxH01.mp4")
hunterep1.video.attach(io: huntervid1, filename: 'HxH01.mp4')
hunterimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterep1img.jpg")
hunterep1.photo.attach(io: hunterimg1, filename: 'hunterep1img.jpg')


hunterep2 = Episode.create(title: 'Test × of × Tests',
    description: 'Gon, Kurapika and Leorio reach Dolle Harbor and told by the 
    captain to head for the cedar tree on the hilltop behind the city. The three 
    are stopped by a group of masked people and an old woman posts a riddle 
    requiring them to choose between 2 possible answers.',
    episode_number: 2,
    show_id: 5)
huntervid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/HxH02.mp4")
hunterep2.video.attach(io: huntervid2, filename: 'HxH02.mp4')
hunterimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/hunterep2img.jpg")
hunterep2.photo.attach(io: hunterimg2, filename: 'hunterep2img.jpg')


nartuoep1 = Episode.create(title: 'He Appears! Naruto Uzumaki',
    description: 'Welcome to Konoha, where deadly ninja roam the land and the 
    mischievous Naruto Uzumaki causes trouble everywhere he goes. But when he 
    steals the ancient scroll of sealing, he unleashes a rare power rarely 
    seen in a 12-year-old boy.',
    episode_number: 1,
    show_id: 6)
narutovid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/Naruto01.mkv")
nartuoep1.video.attach(io: narutovid1, filename: 'Naruto01.mkv')
narutoimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/narutoep1img.jpg")
nartuoep1.photo.attach(io: narutoimg1, filename: 'narutoep1img.jpg')


narutoep2 = Episode.create(title: 'My Name is Konohamaru!',
    description: `Naruto finally graduates from the Ninja Academy and claims to 
    know it all. Well, at least that's what he tells Konohamaru, Konoha's Hokage 
    grandson.`,
    episode_number: 2,
    show_id: 6)
narutovid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/Naruto02.mkv")
narutoep2.video.attach(io: narutovid2, filename: 'Naruto02.mkv')
narutoimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/narutoep2img.jpg")
narutoep2.photo.attach(io: narutoimg2, filename:'narutoep2img.jpg')


onepunchep1 = Episode.create(title: 'Return of the Hero',
    description: 'Saitama and Genos are out shopping when they come across G4, 
    a demonic robot on a mission to eliminate King. Meanwhile, Sitch attempts to 
    recruit various assassins and villains.',
    episode_number: 13,
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


pokemonep2 = Episode.create(title: 'Pokémon Emergency!',
    description: 'Ash and Pikachu make it to Viridian City. As Pikachu rests in 
    the Pokemon Center, after being attacked by Spearow, the Center gets 
    attacked by Pokemon thieves calling themselves, Team Rocket.',
    episode_number: 2,
    show_id: 8)
pokemonvid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/Pokemon02.mp4")
pokemonep2.video.attach(io: pokemonvid2, filename: 'Pokemon02.mp4')
pokemonimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/pokemonep2img.jpg")
pokemonep2.photo.attach(io: pokemonimg2, filename: 'pokemonep2img.jpg')


champlooep1 = Episode.create(title: 'Tempestuous Temperaments',
    description: 'When two vagrant samurais stumble into waitress Fuu, the three 
    get in trouble with the local magistrate.',
    episode_number: 1,
    show_id: 9)
champloovid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/SamuraiChamploo01.mkv")
champlooep1.video.attach(io: champloovid1, filename: 'SamuraiChamploo01.mkv')
champlooimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/champlooep1img.jpg")
champlooep1.photo.attach(io: champlooimg1, filename: 'champlooep1img.jpg')


champlooep2 = Episode.create(title: 'Redeye Reprisal',
    description: `After Mugen cuts off a former enemy's arm, the enemy sets out 
    to extract revenge on him by kidnapping Fuu and kill Mugen and Jin.`,
    episode_number: 2,
    show_id: 9)
champloovid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/SamuraiChamploo02.mkv")
champlooep2.video.attach(io: champloovid2, filename: 'SamuraiChamploo02.mkv')
champlooimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/champlooep2img.jpg")
champlooep2.photo.attach(io: champlooimg2, filename: 'champlooep2img.jpg')


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


ghoulep2 = Episode.create(title: 'Incubation',
    description: 'Kaneki struggles to adapt to his new nature with no success, 
    until another ghoul, Nishiki Nishio attempts to prey on his friend Hideyoshi
     Nagachika and he must fight to protect him.',
    episode_number: 2,
    show_id: 10)
ghoulvid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/TokyoGhoul02.mp4")
ghoulep2.video.attach(io: ghoulvid2, filename: 'TokyoGhoul02.mp4')
ghoulimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/tokyoep2img.jpg")
ghoulep2.photo.attach(io: ghoulimg2, filename: 'tokyoep2img.jpg')


neonep1 = Episode.create(title: 'Angel Attack',
    description: `Shinji Ikari, a 14-year-old boy in the city of Tokyo-3, is 
    delivered to the secret organization NERV, where he is requested by his 
    enigmatic father to save the city from an invading creature called an Angel.`,
    episode_number: 1,
    show_id: 11)
neonvid1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/NGE1.mkv")
neonep1.video.attach(io: neonvid1, filename: 'NGE1.mkv')
neonimg1 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/neonep1img.jpg")
neonep1.photo.attach(io: neonimg1, filename: 'neonep1img.jpg')

neonep2 = Episode.create(title: 'The Beast',
    description: 'In the wake of the previous battle, Misato hastily decides to 
    let Shinji have a room in her apartment, where he discovers just what an 
    irresponsible person his new guardian is. Shinji is also haunted by memories
     of his fight with the Angel.',
    episode_number: 2,
    show_id: 11)
neonvid2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/NGE2.mkv")
neonep2.video.attach(io: neonvid2, filename: 'NGE2.mkv')
neonimg2 = open("https://beaucoup-dev.s3-us-west-1.amazonaws.com/neeonep2img.jpg")
neonep2.photo.attach(io: neonimg2, filename: 'neeonep2img.jpg')
