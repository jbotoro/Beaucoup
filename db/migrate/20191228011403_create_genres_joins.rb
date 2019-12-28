class CreateGenresJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genres_joins do |t|
      t.integer :show_id, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end
  end
end
