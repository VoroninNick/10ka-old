# -*- encoding : utf-8 -*-
class Catalog < ActiveRecord::Base
  attr_accessible :description, :name, :slug

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  has_many :parent_catalogs

  def to_param
    slug
  end
end
