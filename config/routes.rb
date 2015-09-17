Rails.application.routes.draw do
  resources :favs

  root "favs#index"
end
