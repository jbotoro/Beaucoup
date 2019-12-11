@shows.each do |show|
    json.set! show.id do 
        json.extract! show, :id, :title, :description, :year, :seasons, :episode_ids
        json.photoUrl url_for(show.photo)
        json.tall_photoUrl url_for(show.tall_photo)
    end
end