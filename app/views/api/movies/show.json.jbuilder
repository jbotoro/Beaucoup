json.extract! @movie :id, :title, :year, :rating, :description

if (@movie.video.attached?)
    json.video_url url_for(@movie.video)
end

if (@movie.image.attached?)
    json.image_url url_for(@movie.image)
end