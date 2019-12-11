json.show do 
    json.partial! './api/shows/show', show: @show
end


json.set! "episodes" do
    @show.episodes.each do |episode|
        json.set! episode.id do
            json.partial! './api/episodes/episode', episode: episode
        end
        
    end
    
end