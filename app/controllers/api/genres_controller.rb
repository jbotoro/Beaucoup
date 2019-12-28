class Api::GenresController < ApplicationController
    def index
        @genres = Genre.includes(:shows)
    end


    def show
        @genre = Genre.includes(:shows).find(params[:id])
    end
end
