class NewParentCatalog < ActiveRecord::Base
  attr_accessible :description, :name, :new_child_catalog_ids, :new_catalog_id, :slug
	has_many :new_child_catalogs
	belongs_to :new_catalog

  validates :name, presence: true
  validates :slug, uniqueness: true, presence: true

  before_validation :generate_url

  rails_admin do
	  edit do
		  field :name
		  field :description do
			  ckeditor true
		  end
		  field :new_child_catalogs
		  field :slug do
			  read_only true
		  end
	  end
  end

  def to_param
	  slug
  end

  def generate_url
	  self.slug ||= name.parameterize
  end
end
