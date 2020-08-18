# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def request(url,payload)

    response = RestClient::Request.execute( 
            method: :get,
            url: url,
            headers: {'user-key'=> 'd1430d8dc1021759e1c33de834f5120b'},
            payload: payload)

    json = JSON.parse response

end

games = RestClient.get('https://api.rawg.io/api/games?search=Halo&page=1')
json_games = JSON.parse games

json_games = json_games["results"]

json_games.map do |game|
    Videogame.create(name: "#{game["name"]}", image_url: "#{game["background_image"]}", background_image_url: "#{game["short_screenshots"][2]["image"]}")
end

#videogames = request('https://api-v3.igdb.com/games/', 'fields name; search "Halo";')
#videogames.map do |videogame|
#    query_id = "fields url; where game = #{videogame["id"]};"
#    image = request('https://api-v3.igdb.com/covers', query_id)
#    Videogame.create(name: "#{videogame["name"]}", image_url: image[0]["url"])
#end

