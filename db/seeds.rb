# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

build_attributes = [
  {name: 'Golden Boy', description: "Top o' the line", price: 2000},
  {name: 'Shining Silver', description: "Middle of the road", price: 1500},
  {name: 'Baseline Bronze', description: "1080p goodness", price: 1000}
]

build_attributes.each do |attribute|
  Build.create(attribute)
end

part_attributes = [
  {cpu: 'Intel Core i7 8700k', cooler: 'Cosair H100i v2', motherboard: 'Asus ROG STRIX Z370-E GAMING', ram: 'G.Skill - Trident Z RGB 16GB (2 x 8GB) DDR4-3200 Memory', gpu: 'EVGA GeForce GTX 1080 Ti 11GB FTW3 GAMING iCX', storage: 'SAMSUNG 960 EVO M.2 500GB NVMe PCI-Express 3.0 x4 SSD', psu: 'EVGA SuperNOVA G3 750W 80 Plus Gold', case: 'Fractal Design Meshify C', build_id: '1'},
  {cpu: 'Intel Core i5 8600k', cooler: 'Cosair H100i v2', motherboard: 'Asus Prime Z370-P', ram: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3000 Memory', gpu: 'EVGA GeForce GTX 1070 Ti 8GB GAMING', storage: 'SAMSUNG 860 EVO Series 2.5" 250GB SATA SSD', psu: 'EVGA 650W Semi-Modular 80 Plus Bronze', case: 'Fractal Design Meshify C', build_id: '2'},
  {cpu: 'Intel Core i5 8400', cooler: 'Cooler Master Hyper 212 EVO', motherboard: 'ASUS Prime B360-Plus', ram: 'Corsair Vengeance LPX 8GB (2 x 4GB) DDR4-2133 Memory', gpu: 'EVGA GeForce GTX 1060 6GB 6GB SC GAMING ', storage: 'SAMSUNG 860 EVO Series 2.5" 250GB SATA SSD', psu: 'EVGA 500W Semi-Modular 80 Plus Bronze', case: 'Fractal Design Meshify C', build_id: '3'}
]

part_attributes.each do |attribute|
 Part.create(attribute)
end
