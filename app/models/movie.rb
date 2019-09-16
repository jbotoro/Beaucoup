# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  rating      :integer          not null
#  description :text             not null
#  video_url   :string           not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord
    validates :title, :year, :rating, :description, 
    :video_url, :image_url, presence: true
    validates :title, uniqueness: true


    def self.find_by_title(title)
        @movie = Movie.find_by(title: title)
        return nil unless @movie
    end
end
