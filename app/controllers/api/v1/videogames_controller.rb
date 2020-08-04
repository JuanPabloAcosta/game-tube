module Api
  module V1
      class VideogamesController < ApplicationController
        protect_from_forgery with: :null_session

        def index
            videogames = Videogame.all
            render json: VideogameSerializer.new(videogames,options).serialized_json
        end
        
        def show
            videogame = Videogame.find_by(slug: params[:slug])
            render json: VideogameSerializer.new(videogame,options).serialized_json
        end

        def create
            videogame = Videogame.new(videogame_params)

            if videogame.save
                render json: VideogameSerializer.new(videogame).serialized_json
            else
                render json: { error: videogame.errors.messages }, status: 422
            end
        end

        def update
            videogame = Videogame.find_by(slug: params[:slug])

            if videogame.update(videogame_params)
                render json: VideogameSerializer.new(videogame,options).serialized_json
            else
                render json: { error: videogame.errors.messages }, status: 422
            end
        end

        def destroy
            videogame = Videogame.find_by(slug: params[:slug])

            if videogame.destroy
                head :no_content
            else
                render json: { error: videogame.errors.messages }, status: 422
            end
        end

        private

        def videogame_params
            params.require(:videogame).permit(:name, :image_url)
        end

        def options
            @options ||= { include: %i[reviews] } 
        end
      end
  end
end