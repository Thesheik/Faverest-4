class CreateFavs < ActiveRecord::Migration
  def change
    create_table :favs do |t|
      t.string :title
      t.text :description
      t.string :category

      t.timestamps null: false
    end
  end
end
