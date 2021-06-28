# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Start seeding..."

puts "Creating origins..."
10.times do
  Origin.create(
    origin: Faker::Coffee.origin
  )
end

origins = Origin.all

puts "Creating coffees..."
100.times do
  Coffee.create(
    blend_name: Faker::Coffee.blend_name,
    variety: Faker::Coffee.variety,
    notes: Faker::Coffee.notes,
    origin: origins.sample
  )
end

puts "All done!!"
