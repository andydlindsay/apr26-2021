require 'rails_helper'
require 'support/database_cleaner'

RSpec.describe Planet, type: :model do

  describe 'Validations' do

    before :each do
      @planet = Planet.new(
        planet_name: 'Mars',
        moon: 'Phobos',
        star: Star.new(
          star_name: 'Sol'
        )
      )
    end

    it 'is valid with all attributes given' do
      expect(@planet).to be_valid
    end

    it 'is not valid without a planet_name' do
      @planet.planet_name = nil
      @planet.save

      # p @planet.errors.full_messages

      expect(@planet).to be_invalid
      expect(@planet.errors.full_messages[0]).to eq("Planet name can't be blank")
    end

    it 'is not valid without a star' do
      @planet.star = nil
      @planet.save

      # p @planet.errors.full_messages

      expect(@planet).to be_invalid
      expect(@planet.errors.full_messages[1]).to eq("Star can't be blank")
    end

    it 'is valid without a moon' do
      @planet.moon = nil

      expect(@planet).to be_valid
    end
    
  end

end
