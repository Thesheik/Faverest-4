class AddColumnToFavs < ActiveRecord::Migration
  def change
    add_column :favs, :photo_url, :photo_url
  end
end
