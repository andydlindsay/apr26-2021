require 'rails_helper'

RSpec.feature "Stars", type: :feature, js: true do

  before :each do
    star_one = Star.create(
      star_name: 'Sol'
    )
    Star.create(
      star_name: 'Vega'
    )
    Star.create(
      star_name: 'Wolf 359'
    )

    Planet.create(
      planet_name: 'Earth',
      moon: 'Moon',
      star: star_one
    )
    Planet.create(
      planet_name: 'Mars',
      moon: 'Phobos',
      star: star_one
    )
  end
  
  scenario 'display the stars page' do
    visit stars_path

    save_screenshot 'test_one.png'
  end

  scenario 'display 3 stars on the page' do
    visit stars_path

    save_screenshot 'test_two.png'

    expect(page).to have_css('.star')

    expect(page).to have_css('.star', count: 3)
  end

  scenario 'go to the stars page, click on a link for planets, visit the planets page' do
    visit stars_path

    save_screenshot 'test_three-one.png'

    click_link 'Planets', match: :first

    save_screenshot 'test_three-two.png'
    
    expect(page).to have_css '.planet', count: 2
  end

end
