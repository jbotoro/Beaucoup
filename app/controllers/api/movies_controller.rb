class Api::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        render 'api/movies/index'
    end

    def show 
        @movie = Movie.find_by_id(params[:id])
        if @movie
            render 'api/movies/show'
        else
            render json: 'Movie not found'
        end
    end

    private

    def movie_params
        params.require(:movie).permit(:title,:year,:rating, :description)
    end
end
