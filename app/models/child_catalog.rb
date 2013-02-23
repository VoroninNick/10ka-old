# -*- encoding : utf-8 -*-
class ChildCatalog < ActiveRecord::Base
  attr_accessible :name, :parent_catalog_id
  belongs_to :parent_catalog
  has_many :products
end
