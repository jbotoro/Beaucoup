json.genre do 
    json.extract! @genre, :id, :genre_type, :show_ids
end

json.set! "shows" do
    @genre.shows.each do |show|
        json.set! show.id do
              json.extract! show, :id, :title, :year, :rating, :description, :seasons
                json.photo_url url_for(show.photo)
                json.tallphoto_url url_for(show.tall_photo)
        end
        
    end
    
end