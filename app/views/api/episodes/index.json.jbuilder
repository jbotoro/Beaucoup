@episodes.each do |episode|
    json.set! episode.id do
    json.extract! episode, :id, :title, :description, :show_id, :episode_number
        
        if (episode.video.attached?)
            json.video_url url_for(episode.video)
        end

        if (episode.photo.attached?)
            json.photo_url url_for(episode.photo)
        end
    end
end