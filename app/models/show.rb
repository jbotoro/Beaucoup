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
    validates :title, :seasons, :year, :rating, :description, presence: true
    validates :title, uniqueness: true

    has_many :user_shows
    has_many :users, through: :users_shows

    has_many :genres_joins
    has_many :genres, through: :genres_joins

    has_many :episodes,
    foreign_key: :show_id,
    class_name: :Episode

    has_one_attached :photo

    has_one_attached :tall_photo

    has_one_attached :details_photo

end
