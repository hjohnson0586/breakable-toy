class CreateBuilds < ActiveRecord::Migration[5.2]
  def change
    create_table :builds do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :price, null: false

      t.timestamps null: false
    end
  end
end
