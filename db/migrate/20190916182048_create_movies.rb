class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false, unique: true
      t.integer :year, null: false
      t.integer :rating, null: false
      t.text :description, null: false
      t.string :video_url, null: false
      t.string :image_url, null: false
      t.timestamps
      t.index :title
    end

  end
end
