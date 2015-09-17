class AddUserIdToFavs < ActiveRecord::Migration
  def change
    add_column :favs, :user_id, :integer
    add_index :favs, :user_id
  end
end
