# -*- encoding : utf-8 -*-
class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :fetch_sponsors, :fetch_banners, :fetch_all_catalog, :get_left_catalogs, :get_center_catalogs, :get_right_catalogs, :fetch_all_child, :fetch_all_products, :count_childs

  def fetch_sponsors
    @fetch_sponsors ||= Sponsor.last(6)
  end

  def fetch_banners
    @fetch_banners ||= Banner.all
  end

  def get_left_catalogs
    @catalog_first ||= HomePosition.find(1)
  end

  def get_center_catalogs
    @catalog_middle ||= HomePosition.find(2)
  end

  def get_right_catalogs
    @catalog_last ||= HomePosition.find(3)
  end

  def fetch_all_catalog
    @catalogs ||= Catalog.all
  end

  def fetch_all_child(ids)
    @childs ||= ChildCatalog.find_all_by_parent_catalog_id(ids)
  end

  def fetch_all_products(ids)
    @products ||= Product.find_all_by_child_catalog_id(ids)
  end

  def count_childs(ids)
    @count ||= ChildCatalog.find_all_by_parent_catalog_id(ids).count
  end
end
