class CreateUserShows < ActiveRecord::Migration[5.2]
  def change
    create_table :user_shows do |t|
      t.integer :user_id, null: false
      t.integer :show_id, null: false
      t.timestamps
    end
  end
end
