class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :blend_name
      t.string :variety
      t.string :notes
      t.references :origin, foreign_key: true, index: true

      t.timestamps
    end
  end
end
