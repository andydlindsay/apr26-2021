class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :planet_name
      t.string :moon
      t.references :star, foreign_key: true, index: true

      t.timestamps
    end
  end
end
