class Api::EpisodesController < ApplicationController
    
    def index
        @episodes = Episode.all
        render 'api/episodes/index'
    end

    def show
        @episode = Episode.find_by(id: params[:id])
        if @episode
            render :show
        else
            render json: 'Episode not found'
        end
    end

    private 

    def episode_params
        params.require(:episode).permit(:title, :episode_number,:description, :show_id)
    end




end
