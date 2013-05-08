# -*- encoding : utf-8 -*-
class Product < ActiveRecord::Base
  attr_accessible :description, :name, :avatar, :child_catalog_id, :slug, :delete_avatar, :parent_catalog_id, :parent_catalog

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_slug_for_product

  attr_accessor :delete_avatar
  before_validation { self.avatar.clear if self.delete_avatar == '1' }

  belongs_to :child_catalog
  belongs_to :parent_catalog

  # Validate name presence and minimum lenght 2 chars
  validates :name, :presence => true, :length => { :minimum => 2 }
  validates :description, :presence => true, :length => { :minimum => 2 }

  # Paperclip image attachments
  has_attached_file :avatar, :styles => { :thumb => '180>', :prod => '190x190#' },
                    :url  => '/assets/product/:id/:style/:basename.:extension',
                    :path => ':rails_root/public/assets/product/:id/:style/:basename.:extension'

  rails_admin do
    label 'Товар'
    label_plural 'Товары'

    list do
      field :name
      field :child_catalog
      field :avatar
    end

    edit do
      field :name
      field :description do
        ckeditor true
      end
      field :avatar
      field :parent_catalog
      field :child_catalog
    end
  end

  def to_param
    slug
  end

  def generate_slug_for_product
    self.slug ||= name.parameterize
  end

end
