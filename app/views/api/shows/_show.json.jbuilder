json.extract! @show, :id, :title, :description,:year, :rating, :seasons, :episode_ids
    json.photoUrl url_for(@show.photo)
    json.tall_photoUrl url_for(@show.tall_photo)