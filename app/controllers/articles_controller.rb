# -*- encoding : utf-8 -*-
class ArticlesController < ApplicationController

  #caches_page :index, :show, :gzip => :best_speed

  def index
    @articles = Article.all
		@fetuared = Article.find_all_by_featured(:t)

  end

  def show
    @article = Article.find_by_slug!(params[:id])
		@article_next = Article.first
    @article_prev = Article.last
    @lasted = Article.last(2)
  end

end
