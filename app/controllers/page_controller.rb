# -*- encoding : utf-8 -*-
class PageController < ApplicationController
  #caches_page :index, :about, :gzip => :best_speed

  def index
		@last_article = Article.last(4)
		@banners = Banner.all
  end

  def about
  end
end
