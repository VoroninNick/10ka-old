# -*- encoding : utf-8 -*-
class ArticlesController < ApplicationController

  caches_page :index, :show, :gzip => :best_speed

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find_by_slug!(params[:id])
  end

end
