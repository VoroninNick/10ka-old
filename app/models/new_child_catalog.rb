class NewChildCatalog < ActiveRecord::Base
  attr_accessible :description, :name, :new_parent_catalog_id, :slug
	has_many :new_products
	belongs_to :new_parent_catalog

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_url

  rails_admin do
	  edit do
		  field :name

		  field :new_parent_catalog do

		  end
		  field :slug do
			  read_only true
		  end
		  field :description do
			  ckeditor true
		  end
	  end
  end

  def to_param
	  slug
  end

  def generate_url
		url = name + '-' + new_parent_catalog.name
	  self.slug ||= url.parameterize
  end

  def self.fullname
		"#{self.new_parent_catalog.name} #{self.name}"
  end

  #def self.name
	 # parent_catalog = NewCatalog.find(self.new_parent_catalog).first
	 # self.new_catalog.name = "#{parent_catalog.name self.name}"
  #end

end
