class FavsController < ApplicationController
  before_action :find_fav, only: [:show, :edit, :update, :destroy, :upvote]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @favs = Fav.all.order("created_at DESC")
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

  def edit
  end
  def update
    if @fav.update(fav_params)
      redirect_to @fav, notice: "Successfully updated"
    else
      render 'edit'
    end
  end

  def destroy
    @fav.destroy
    redirect_to root_path
  end

  def upvote
    @fav.upvote_by current_user
    redirect_to :back
  end

  private

  def fav_params
    params.require(:fav).permit(:title, :description, :category, :photo_url)
  end

  def find_fav
    @fav = Fav.find(params[:id])
  end

end
