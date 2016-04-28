class Api::CollectionsController < ApplicationController

  def index
    if current_user
      @collections = Collection.includes(:feeds).where(user_id: current_user.id)
      render :index
    else
      @errors = ["You are not logged in"]
      render "api/errors/errors", status: 500
    end
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

end
