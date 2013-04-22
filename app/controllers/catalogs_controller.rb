# -*- encoding : utf-8 -*-
class CatalogsController < ApplicationController
  respond_to :html, :json, :xml

  def index
    @catalogs ||= Catalog.all
    respond_with(@catalogs)
  end

  def show
    @catalog ||= Catalog.find_by_slug!(params[:id])
    respond_with(@catalog)
  end

  # GET /catalog/parent/1
  # GET /catalog/parent/1.json
  # GET /catalog/parent/1.xml
  def show_parent
    @parent_catalog ||= ParentCatalog.find_by_slug!(params[:id])
    respond_with(@parent_catalog)
  end

  # GET /catalog/parent/child/1
  # GET /catalog/parent/child/1.json
  # GET /catalog/parent/child/1.xml
  def show_child
    @child_catalog ||= ChildCatalog.find_by_slug!(params[:id])
    respond_with(@child_catalog)
  end

  # GET /catalog/parent/child/product/1
  # GET /catalog/parent/child/product/1.json
  # GET /catalog/parent/child/product/1.xml
  def show_product
    @product ||= Product.find_by_slug!(params[:id])
    respond_with(@product)
  end

end
