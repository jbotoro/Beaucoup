Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resources :episodes, only: [:show, :index]
    resources :movies, only: [:index, :show]
    resources :user_stuff, only: [:create, :destroy]
    resources :genres, only: [:index, :show]
  end

 
end
