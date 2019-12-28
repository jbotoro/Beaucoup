class Genre < ApplicationRecord
    validates :genre_type, presence: true
    
    has_many :genres_joins
    has_many :shows, through: :genres_joins


end