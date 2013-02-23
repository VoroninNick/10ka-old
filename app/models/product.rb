# -*- encoding : utf-8 -*-
class Product < ActiveRecord::Base
  attr_accessible :description, :name, :avatar, :child_catalog_id

  attr_accessor :delete_avatar
  before_validation { self.avatar.clear if self.delete_avatar == '1' }

  belongs_to :child_catalog

  # Validate name presence and minimum lenght 2 chars
  validates :name, :presence => true, :length => { :minimum => 2 }
  validates :description, :presence => true, :length => { :minimum => 2 }

  # Paperclip image attachments
  has_attached_file :avatar, :styles => { :thumb => "150x150>" },
                    :url  => "/assets/product/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/product/:id/:style/:basename.:extension"

  # Validate banner presence
  validates_attachment_presence :avatar
  validates_attachment_size :avatar, :less_than => 2.megabytes
  validates_attachment_content_type :avatar, :content_type => ['image/jpeg', 'image/png']
end
