# -*- encoding : utf-8 -*-
class Article < ActiveRecord::Base
  attr_accessible :description, :name
end
