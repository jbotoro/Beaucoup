class RemoveColumnsFromEpisodesAndMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :video_url, :string
    remove_column :movies, :image_url, :string
    remove_column :shows, :video_url, :string
    remove_column :shows,:image_url, :string
  end
end
