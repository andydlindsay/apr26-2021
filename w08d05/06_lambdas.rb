pet_names = ['Molly', 'Reggie', 'Felix', 'Tattersail', 'Coco', 'Dog', 'Kubie', 'Cookie']

# pet_names.each do |pet_name|
#   puts "does #{pet_name} want a snack?"
# end

my_block = lambda do |pet_name|
  puts "does #{pet_name} want a snack?"
end

pet_names.each &my_block
