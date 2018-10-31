class Build < ApplicationRecord
  validates_presence_of :cpu, :cooler, :motherboard, :ram, :gpu, :storage, :psu, :case
end
