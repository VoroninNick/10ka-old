class PageController < ApplicationController
  def index
  	@fetch_banners ||= Banner.all
  end

  def about
  end
end
