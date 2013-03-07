# -*- encoding : utf-8 -*-
class Article < ActiveRecord::Base
  attr_accessible :description, :name, :avatar

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_slug_for_article

  has_attached_file :avatar

  def to_param
    slug
  end

  def generate_slug_for_article
    self.slug ||= name.parameterize
  end
end