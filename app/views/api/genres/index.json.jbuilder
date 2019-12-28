@genres.each do |genre|
     json.set! genre.id do 
        json.extract! genre, :id, :genre_type, :show_ids
     end
end