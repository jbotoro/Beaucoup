@shows.each do |show|
    json.set! show.id do
        json.extract! show, :id, :title, :year, :rating, :description, :seasons

        if (showItem.video.attached?)
            json.video_url url_for(showItem.video)
        end

        if (showItem.image.attached?)
            json.image_url url_for(showItem.image)
        end
    end
end