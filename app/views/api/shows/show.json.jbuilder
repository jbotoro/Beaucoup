 json.extract! @show, :id, :title, :year, :rating, :description, :seasons, :episodes

if (@show.video.attached?)
    json.video_url url_for(@show.video)
end

if (@show.photo.attached?)
    json.photo_url url_for(@show.photo)
end

if (@show.tall_photo.atttached?)
    json.talliphoto_url url_for(@show.tall_photo)
end