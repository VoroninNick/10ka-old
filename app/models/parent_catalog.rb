# -*- encoding : utf-8 -*-
class ParentCatalog < ActiveRecord::Base
  attr_accessible :catalog_id, :name, :slug

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  has_many :child_catalogs
  belongs_to :catalog

  def to_param
    slug
  end
end
