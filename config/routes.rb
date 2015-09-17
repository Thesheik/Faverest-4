Rails.application.routes.draw do
  devise_for :users
  resources :favs

  root "favs#index"
end
