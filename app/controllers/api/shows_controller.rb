class Api::ShowsController < ApplicationController
    def index
        @shows = Show.all
        render 'api/shows/index'
    end

    def show
        @show = Show.find_by_id(params[:id])
        if @show 
            render 'api/shows/show'
        else
            render json: "Show not found"
        end
    end

    private

    def show_params
        params.require(:show).permit(:title, :seasons, :year,
         :rating, :description, :video_url, :image_url)
    end
end
