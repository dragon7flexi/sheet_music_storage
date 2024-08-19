Rails.application.routes.draw do
  resources :sheet_musics, only: [:create, :show, :update, :destroy]
end