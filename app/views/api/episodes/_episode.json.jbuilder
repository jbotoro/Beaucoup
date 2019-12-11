json.extract! episode, :id, :title, :description, :episode_number, :show_id
    json.photoUrl url_for(episode.photo)
    json.videoUrl url_for(episode.video)