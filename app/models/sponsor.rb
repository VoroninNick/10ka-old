# -*- encoding : utf-8 -*-
class Sponsor < ActiveRecord::Base
  attr_accessible :description, :link, :name, :sponsor

  attr_accessor :delete_sponsor
  before_validation { self.sponsor.clear if self.delete_sponsor == '1' }

  # Validate name presence and minimum lenght 2 chars
  validates :name, :presence => true, :length => { :minimum => 2 }
  validates :description, :presence => true, :length => { :minimum => 10 }

  # Paperclip image attachments
  has_attached_file :sponsor, :styles => { :thumb => '150x150>' },
                  :url  => '/assets/sponsor/:id/:style/:basename.:extension',
                  :path => ':rails_root/public/assets/sponsor/:id/:style/:basename.:extension'

  # Validate sponsor presence
	validates_attachment_presence :sponsor
	validates_attachment_size :sponsor, :less_than => 1.megabytes
	validates_attachment_content_type :sponsor, :content_type => %w{'image/png'}

end
