Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json} do
    resource :user, only: [:show, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :feeds, only: [:index, :show]
  end
end
