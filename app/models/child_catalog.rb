# -*- encoding : utf-8 -*-
class ChildCatalog < ActiveRecord::Base
  attr_accessible :name, :parent_catalog_id, :slug

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_slug_for_c_catalog

  belongs_to :parent_catalog
  has_many :products

  def to_param
    slug
  end

  def generate_slug_for_c_catalog
    self.slug ||= name.parameterize
  end
end
