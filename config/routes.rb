# -*- encoding : utf-8 -*-
App10k::Application.routes.draw do
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :articles
  match 'articles'                                                  => 'articles#index', :as => 'articles'
  match 'articles/:id'                                              => 'articles#show', :as => 'article_item'
  match 'about'                                                     => 'page#about'
  match 'contact'                                                   => 'contact#new', :as => 'contact', :via => :get
  match 'contact'                                                   => 'contact#create', :as => 'contact', :via => :post
  match 'catalog'                                                   => 'catalogs#index', :via => :get, :as => 'catalog_main'
  match 'catalog/:id'                                               => 'catalogs#show', :via => :get, :as => 'catalog_show'
  match 'catalog/:catalog_id/:id'                                   => 'catalogs#show_parent', :via => :get, :as => 'parent_show'
  match 'catalog/:catalog_id/:parent_id/:id'                        => 'catalogs#show_child', :via => :get, :as => 'child_show'
  match 'catalog/:catalog_id/:parent_id/:child_catalog_id/:id'      => 'catalogs#show_product', :via => :get, :as => 'product_show'
  root :to                                                          => 'page#index'
end
