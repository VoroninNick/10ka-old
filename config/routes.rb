# -*- encoding : utf-8 -*-
App10k::Application.routes.draw do
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  devise_for :users
  resources :articles
  match 'about'                      => 'page#about'
  match 'contact'                    => 'contact#new', :as => 'contact', :via => :get
  match 'contact'                    => 'contact#create', :as => 'contact', :via => :post
  match 'catalog/parent/:id'         => 'catalogs#show_parent', :via => :get
  match 'catalog/parent/childs/:id'  => 'catalogs#show_child', :via => :get
  root :to => 'page#index'
end
