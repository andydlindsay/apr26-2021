require 'rails_helper'

RSpec.describe Planet, type: :model do

  before :each do
    @planet = Planet.new(
      planet_name: 'Earth',
      moon: 'Moon',
      star: Star.new(
        star_name: 'Sol'
      )
    )
  end
  
  it 'is valid with all attributes' do
    expect(@planet).to be_valid
  end

  it 'is invalid if missing planet_name' do
    @planet.planet_name = nil
    @planet.save

    # p planet.errors.full_messages

    expect(@planet).to be_invalid
    expect(@planet.errors.full_messages[0]).to eq("Planet name can't be blank")
  end

  it 'is invalid without a star' do
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
