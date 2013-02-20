class Banner < ActiveRecord::Base
  attr_accessible :banner, :description, :name

  # Validate name presence and minimum lenght 2 chars
  validates :name, :presence => true, :length => { :minimum => 2 }

  # Paperclip image attachments
  has_attached_file :banner, :styles => { :thumb => "150x150>" },
                  :url  => "/assets/banner/:id/:style/:basename.:extension",
                  :path => ":rails_root/public/assets/banner/:id/:style/:basename.:extension"

  # Validate banner presence
	validates_attachment_presence :banner
	validates_attachment_size :banner, :less_than => 2.megabytes
	validates_attachment_content_type :banner, :content_type => ['image/jpeg', 'image/png']
end
