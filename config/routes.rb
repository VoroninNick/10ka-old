# -*- encoding : utf-8 -*-
App10k::Application.routes.draw do
  

  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

  #

  mount Ckeditor::Engine => '/ckeditor'

  mount RailsAdmin::Engine                              => '/admin', :as => 'rails_admin'
  mount Rubyception::Engine                             => '/rubyception'
  devise_for :users
  resources :articles
  match 'articles'                                      => 'articles#index', :as => 'articles'
  match 'articles/:id'                                  => 'articles#show', :as => 'article_item'
  match 'about'                                         => 'page#about'
  match 'contact'                                       => 'contact#new', :as => 'contact', :via => :get
  match 'contact'                                       => 'contact#create', :as => 'contact', :via => :post
  match 'catalogs'                                      => 'catalogs#index', :via => :get, :as => 'catalog_main'
  #match 'catalogs/:id'                                 => 'catalogs#show', :via => :get
  match 'catalogs/:id'                                  => 'catalogs#show_parent', :via => :get, :as => 'parent_show'
  match 'catalogs/:parent_id/:child_id'                 => 'catalogs#show_child', :via => :get, :as => 'child_show'
  match 'catalogs/:parent_id/:child_id/:product_id'     => 'catalogs#show_product', :via => :get, :as => 'product_show'
  root :to                                              => 'page#index'
end
