@movies.each do |movie|
    json.set! movie.id do
    json.extract! movie, :id, :title, :year, :rating, :description
        if (movie.video.attached?)
            json.video_url url_for(movie.video)
        end

        if (movie.photo.attached?)
            json.photo_url url_for(movie.photo)
        end

        if (movie.tall_photo.attached?)
            json.tallphoto_url url_for(movie.tall_photo)
        end
    end
end