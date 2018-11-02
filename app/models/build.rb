class Build < ApplicationRecord
  has_many :parts

  validates_presence_of :name, :description, :price
end
