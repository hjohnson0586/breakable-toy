Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :builds, only: [:index]
    end
  end
  root 'builds#index'
end
