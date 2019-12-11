class Api::MoviesController < ApplicationController

    def index
        @movies = Movie.with_attached_photo.with_attached_video.all
        render :index
    end

    def show 
        @movie = Movie.find_by_id(params[:id])
        if @movie
            render :show
        else
            render json: 'Movie not found'
        end
    end

    private

    def movie_params
        params.require(:movie).permit(:title,:year,:rating,:description)
    end
end
