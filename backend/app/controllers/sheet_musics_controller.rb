class SheetMusicsController < ApplicationController
    def create
        @sheet_music = SheetMusic.new(sheet_music_params)

        if @sheet_music.save
            render json: @sheet_music, status: :created
        else
            render json: @sheet_music.errors, status: :unprocessable_entity
        end
    end

    def show
        @sheet_music = SheetMusic.find(params[:id])
        render json: @sheet_music
    end

    def update
        @sheet_music = SheetMusic.find(params[:id])
        if @sheet_music.update(sheet_music_params)
            render json: @sheet_music
        else
            render json: @sheet_music.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @sheet_music = SheetMusic.find(params[:id])
        @sheet_music.destroy
        head :no_content
    end

    private

    def sheet_music_params
        params.require(:sheet_music).permit(:title, :description, :pdf)
    end
end
