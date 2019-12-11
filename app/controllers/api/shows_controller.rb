class Api::ShowsController < ApplicationController
    def index
        @shows = Show.includes(:episodes).with_attached_photo
        render :index
    end

    def show
        @show = Show.includes(:episodes).with_attached_photo.find(params[:id])
        if @show 
            render :show
        else
            render json: "Show not found"
        end
    end

    private

    def show_params
        params.require(:show).permit(:title, :seasons, :year,
         :rating, :description)
    end
end
