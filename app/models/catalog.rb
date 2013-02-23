# -*- encoding : utf-8 -*-
class Catalog < ActiveRecord::Base
  attr_accessible :description, :name
  has_many :parent_catalogs
end
