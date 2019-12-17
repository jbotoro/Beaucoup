class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title, null: false, unique: true
      t.integer :episode_number, null: false
      t.text :description, null: false
      t.integer :show_id, null: false
      t.timestamps
      t.index :show_id

      
    end
  end
end
