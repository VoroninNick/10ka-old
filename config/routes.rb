# -*- encoding : utf-8 -*-
App10k::Application.routes.draw do
  match '/dev/cmd', to:'developer_panel#command_line'
  get '/dev', to: 'developer_panel#index'

  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :articles
  match 'pasha', to: 'pasha#cmd'
  match 'articles'                                                  => 'articles#index', :as => 'articles'
  match 'articles/:id'                                              => 'articles#show', :as => 'article_item'
  match 'about'                                                     => 'page#about'
  match 'contact'                                                   => 'contact#new', :as => 'contact', :via => :get
  match 'contact'                                                   => 'contact#create', :as => 'contact', :via => :post
  match 'catalog'                                                   => 'catalogs#index', :via => :get, :as => 'catalog_main'
  match 'catalog/:id'                                               => 'catalogs#show', :via => :get, :as => 'catalog_show'
  match 'catalog/:catalog_id/:id'                                   => 'catalogs#show_parent', :via => :get, :as => 'parent_show'
  match 'catalog/:catalog_id/:parent_catalog_id/:id'                        => 'catalogs#show_child', :via => :get, :as => 'child_show'
  match 'catalog/:catalog_id/:parent_catalog_id/:child_catalog_id/:id'      => 'catalogs#show_product', :via => :get, :as => 'product_show'
  match 'public/xml/gmap'                                           => redirect('/public/xml/gmap.xml')

  # new catalog
  match 'c' => 'new_catalog#index', :as => 'new_catalog_all'
  match 'c/:id' => 'new_catalog#get_catalog', :as => 'new_catalog'
  match 'c/:new_catalog_id/:id' => 'new_catalog#get_parent', :as => 'new_catalog_parent'
  match 'c/:new_catalog_id/:new_parent_catalog_id/:id' => 'new_catalog#get_child', :as => 'new_catalog_child'
  match 'c/:new_catalog_id/:new_parent_catalog_id/:new_child_catalog_id/:id' => 'new_catalog#get_product', :as => 'new_product'
  match 'unsupported' => 'page#unsupported', :as => 'unsupported'
  root :to                                                          => 'page#index'
end
