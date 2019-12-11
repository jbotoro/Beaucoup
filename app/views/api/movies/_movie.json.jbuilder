 json.extract! movie, :id, :title, :description, :year
 json.photoUrl url_for(movie.photo)
 json.videoUrl url_for(movie.video)
 json.tall_photoUrl url_for(movie.tall_photo)