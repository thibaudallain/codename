class PagesController < ApplicationController
  def home
    @game = Game.create
    if rand(0..10) <= 5
      @game.red = 8
      @game.blue = 7
      @game.save
    else
      @game.red = 7
      @game.blue = 8
      @game.save
    end
    @array_of_words = Word.all.shuffle.first(25)
    @array_of_words[0..@game.red - 1].each do |word|
      WordGame.create!(word_id: word.id, game_id: @game.id, color: "red")
    end
    @array_of_words[@game.red..(@game.red + @game.blue - 1)].each do |word|
      WordGame.create!(word_id: word.id, game_id: @game.id, color: "blue")
    end
    @array_of_words[(@game.red + @game.blue)..-2].each do |word|
      WordGame.create!(word_id: word.id, game_id: @game.id, color: "white")
    end
    WordGame.create!(word_id: @array_of_words.last.id, game_id: @game.id, color: "black")
    @list_of_words = WordGame.where(game_id: @game.id)
    @list_of_words = @list_of_words.shuffle
    respond_to do |format|
      format.html
      format.js
    end
  end
end
