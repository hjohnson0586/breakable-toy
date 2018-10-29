class Configuration < ApplicationRecord
  validates_presence_of :cpu, :motherboard, :ram, :gpu, :ssd, :psu, :case
end
