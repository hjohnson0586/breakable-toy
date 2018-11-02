class Part < ApplicationRecord
  belongs_to :build

  validates_presence_of :cpu, :cooler, :motherboard, :ram, :gpu, :storage, :psu, :case, :build_id
end
