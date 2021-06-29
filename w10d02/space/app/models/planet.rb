class Planet < ApplicationRecord
  belongs_to :star

  validates :planet_name, presence: true
  validates :star, presence: true
end
