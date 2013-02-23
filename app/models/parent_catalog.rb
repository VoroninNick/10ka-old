# -*- encoding : utf-8 -*-
class ParentCatalog < ActiveRecord::Base
  attr_accessible :catalog_id, :name
  has_many :child_catalogs
  belongs_to :catalog
end
