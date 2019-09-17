@movies.each do |movie|
    json.set! movie.id do
        json.extract! movie, :id, :title, :year, :rating, :description
    end
end