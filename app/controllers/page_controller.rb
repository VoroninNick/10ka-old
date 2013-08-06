# -*- encoding : utf-8 -*-
class PageController < ApplicationController
  #caches_page :index, :about, :gzip => :best_speed

  def index
		@last_article = Article.last(4)
  end

  def about
  end
end
