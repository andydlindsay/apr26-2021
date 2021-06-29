require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Stars", type: :feature, js: true do

  before :each do
    ploto = Star.create(
      star_name: 'Ploto'
    )
    Star.create(
      star_name: 'David Bowie'
    )
    Star.create(
      star_name: 'Lady Gaga'
    )

    Planet.create(
      planet_name: 'Ego',
      star: ploto
    )
    Planet.create(
      planet_name: 'Tattooine',
      moon: 'Loaded Diaper',
      star: ploto
    )

    visit stars_path
  end
  
  scenario 'can visit the stars page' do
    save_screenshot 'test-one-stars-page.png'
  end

  scenario 'visit the stars page and see 3 stars' do
    save_screenshot 'test-two-stars-page.png'

    # p page
    # p page.html

    expect(page).to have_css('.star')
    expect(page).to have_css('.star', count: 3)
  end

  scenario 'visit the stars page, click on a link, visit the planets page' do
    save_screenshot 'test-three-stars-page.png'

    # click_link 'Planets'
    click_link 'Planets', match: :first
    # first(:link, 'Planets').click

    save_screenshot 'test-three-planets-page.png'

    expect(page).to have_text /all the planets/i

    expect(page).to have_css '.planet', count: 2
  end

end
