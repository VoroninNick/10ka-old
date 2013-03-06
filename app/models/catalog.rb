# -*- encoding : utf-8 -*-
class Catalog < ActiveRecord::Base
  attr_accessible :description, :name, :slug, :parent_catalog_ids, :home_position_id

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_slug_for_catalog

  has_many :parent_catalogs
  belongs_to :home_position

  def to_param
    slug
  end

  def generate_slug_for_catalog
    self.slug ||= name.parameterize
  end
end
