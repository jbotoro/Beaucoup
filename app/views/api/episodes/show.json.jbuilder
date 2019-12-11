json.extract! @episode, :id, :title, :description, :episode_number, :show_id

if (@episode.video.attached?)
    json.video_url url_for(@episode.video)
end

if (@episode.photo.attached?)
    json.photo_url url_for(@episode.photo)
end

