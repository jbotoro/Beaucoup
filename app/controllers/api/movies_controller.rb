class Api::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        render 'api/movies/index'
    end

    def show 
        @movie = Movie.find_by_id(params[:id])
        return nil unless @movie
    end

    private

    def movie_params
        params.require(:movie).permit(:title,:year,:rating, :description, :video_url, :image_url)
    end
end
