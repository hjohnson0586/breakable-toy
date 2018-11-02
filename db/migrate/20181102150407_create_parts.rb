class CreateParts < ActiveRecord::Migration[5.2]
  def change
    create_table :parts do |t|
      t.string :cpu, null: false
      t.string :cooler, null: false
      t.string :motherboard, null: false
      t.string :ram, null: false
      t.string :gpu, null: false
      t.string :storage, null: false
      t.string :psu, null: false
      t.string :case, null: false

      t.belongs_to :build

      t.timestamps null: false
    end
  end
end
