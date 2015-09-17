class FavsController < ApplicationController
  before_action :find_fav, only: [:show, :edit, :update, :destroy]
  def index
  end

  def show
  end

  def new
    @fav = Fav.new
  end
  def create
    @fav = Fav.new(fav_params)

    if @fav.save
      redirect_to @fav, notice: "Successfully created new Fav"
    else
      render "new"
    end
  end

  private

  def fav_params
    params.require(:fav).permit(:title, :description, :category)
  end

  def find_fav
    @fav = Fav.find(params[:id])
  end

end
