# -*- encoding : utf-8 -*-
class ChildCatalog < ActiveRecord::Base
  attr_accessible :name, :parent_catalog_id, :slug

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  belongs_to :parent_catalog
  has_many :products

  def to_param
    slug
  end
end
