# == Schema Information
#
# Table name: shows
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  seasons     :integer          not null
#  year        :integer          not null
#  rating      :integer          not null
#  description :text             not null
#  video_url   :string           not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Show < ApplicationRecord
    validates :title, :seasons, :year, :rating, :description, :video_url, :image_url, presence: true
    validates :title, uniqueness: true

    has_one_attached :image
    has_one_attached :video

    has_many :episodes,
    foreign_key: :show_id,
    class_name: :Episode

    def self.find_by_title(title)
        @show = Show.find_by(title: title)
        return nil unless @show
    end
end
