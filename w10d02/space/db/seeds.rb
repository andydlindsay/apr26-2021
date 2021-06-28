# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Starting seeds..."

puts "Generating the stars!"

10.times do
  Star.create(
    star_name: Faker::Space.star
  )
end

stars = Star.all

puts "Generating the planets"

100.times do
  Planet.create(
    planet_name: Faker::Space.planet,
    moon: Faker::Space.moon,
    star: stars.sample
  )
end

puts "All done!"
