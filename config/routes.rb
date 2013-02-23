# -*- encoding : utf-8 -*-
App10k::Application.routes.draw do
  
  

  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

  devise_for :users
  resources :catalogs
  resources :articles
  match 'about'               => 'page#about'
  match 'contact'             => 'contact#new', :as => 'contact', :via => :get
  match 'contact'             => 'contact#create', :as => 'contact', :via => :post
  root :to => 'page#index'
end
