class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :fetch_sponsors, :fetch_banners

  def fetch_sponsors
    @fetch_sponsors ||= Sponsor.all
  end

  def fetch_banners
    @fetch_banners ||= Banner.all
  end
end
