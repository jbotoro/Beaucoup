class CreateUserstuffs < ActiveRecord::Migration[5.2]
  def change
    create_table :userstuffs do |t|

      t.timestamps
    end
  end
end
