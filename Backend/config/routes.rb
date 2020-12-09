Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do 
    resources :comments 
  end 

  resources :comments 

  post '/login', to: 'sessions#create'

  get 'logout', to: 'sessions#destroy'

  post '/increase-levels-completed', to: 'users#increase_level'

end

