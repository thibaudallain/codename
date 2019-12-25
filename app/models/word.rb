class Word < ApplicationRecord
  has_many :word_games, dependent: :destroy
end
