# -*- encoding : utf-8 -*-
class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :fetch_sponsors, :fetch_banners, :get_catalogs, :get_parents

  def fetch_sponsors
    @fetch_sponsors ||= Sponsor.all
  end

  def fetch_banners
    @fetch_banners ||= Banner.all
  end

  def get_childs
    @catalog ||= Catalog.all
    @parent ||= ParentCatalog.find_all_by_catalog_id(@catalog)
    @child ||= ChildCatalog.find_all_by_parent_catalog_id(@parent)
  end

  def get_parents(catalog_ids)
    #@catalog ||= Catalog.all
    @parent ||= ParentCatalog.find_all_by_catalog_id(catalog_ids)
  end

  def get_catalogs
    @catalog ||= Catalog.all
  end
end
