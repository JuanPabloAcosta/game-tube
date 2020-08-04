class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :category, :score, :videogame_id
end
