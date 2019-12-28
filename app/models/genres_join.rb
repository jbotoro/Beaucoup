class GenresJoin < ApplicationRecord
    validates :show_id, :genre_id, presence: true

    belongs_to :show

    belongs_to :genre


end