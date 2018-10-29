class CreateConfigurations < ActiveRecord::Migration[5.2]
  def change
    create_table :configurations do |t|
      t.string :cpu, null: false
      t.string :motherboard, null: false
      t.string :ram, null: false
      t.string :gpu, null: false
      t.string :ssd, null: false
      t.string :psu, null: false
      t.string :case, null: false

      t.timestamps null: false
    end
  end
end
