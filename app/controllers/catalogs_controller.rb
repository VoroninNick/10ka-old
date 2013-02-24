# -*- encoding : utf-8 -*-
class CatalogsController < ApplicationController

  def index
    @catalogs ||= Catalog.all
  end

  def show
    @catalog ||= Catalog.find_by_slug!(params[:id])
  end

  # GET /catalog/parent/1
  def show_parent
    @parent_catalog ||= ParentCatalog.find_by_slug!(params[:id])
  end

  # GET /catalog/parent/child/1
  def show_child
    @child_catalog ||= ChildCatalog.find_by_slug!(params[:id])
  end

  # GET /catalog/parent/child/product/1
  def show_product
    @product ||= Product.find_by_slug!(params[:id])
  end

end
