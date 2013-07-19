class NewProduct < ActiveRecord::Base
  attr_accessible :description, :name, :new_child_catalog_id, :new_child_catalog, :slug
	has_one :new_child_catalog

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_url

  rails_admin do
	  edit do
		  field :name
		  field :description do
			  ckeditor true
		  end
		  field :new_child_catalog
		  field :slug do
			  read_only true
		  end
	  end
	  list do
		  field :name
		  field :slug
		  field :new_child_catalog
	  end
  end

  def to_param
	  slug
  end

  def generate_url
	  url = name
	  self.slug ||= url.parameterize
  end
end
