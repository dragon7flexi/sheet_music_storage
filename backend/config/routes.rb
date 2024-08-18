Rails.application.routes.draw do
  resources :sheet_music, only: [:create, :show, :update, :destroy]
end