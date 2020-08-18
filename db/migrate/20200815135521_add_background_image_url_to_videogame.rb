class AddBackgroundImageUrlToVideogame < ActiveRecord::Migration[6.0]
  def change
    add_column :videogames, :background_image_url, :string
  end
end
