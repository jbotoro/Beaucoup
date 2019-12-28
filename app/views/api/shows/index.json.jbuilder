@shows.each do |show|
    json.set! show.id do
    json.extract! show, :id, :title, :year, :rating, :description, :seasons

        if (show.photo.attached?)
            json.photo_url url_for(show.photo)
        end

        if(show.tall_photo.attached?)
            json.tallphoto_url url_for(show.tall_photo)
        end
        if(show.details_photo.attached?)
            json.detailsphoto_url url_for(show.details_photo)
        end
    end
end