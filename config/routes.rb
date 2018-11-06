Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :builds, only: [:index, :show] do
        resources :parts, only: [:index, :show, :create]
      end
    end
  end
  root 'builds#index'
  get '/builds', to: 'builds#index'
  get '/builds/:build_id', to: 'builds#index'
end
