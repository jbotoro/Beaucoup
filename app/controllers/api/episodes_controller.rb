class Api::EpisodesController < ApplicationController
    
    def show
        @episode = Episode.find_by(params[:id])
        if @episode
            render 'api/episodes/show'
        else
            render json: 'Episode not found'
        end
    end

    private 

    def episode_params
        params.require(:episode).permit(:title, :episode_number,:description, :show_id)
    end




end
