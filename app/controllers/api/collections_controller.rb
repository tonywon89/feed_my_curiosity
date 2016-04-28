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
    @collection = Collection.includes(:feeds).where(id: params[:id])[0]
    if @collection
      render :show
    else
      @errors = ["Collection cannot be found"]
      render "api/errors/errors", status: 500
    end
  end

  def create
    if current_user
      @collection = Collection.new(
        name: params[:collection][:name],
        user_id: current_user.id
      )

      @collection.transaction do
        @collection.save!
        @collection.collection_feeds.create!(feed_id: params[:collection][:feed_id])
      end

      if Collection.find_by(name: @collection.name, user_id: @collection.user_id)
        render :show
      else
        @errors = ["Save was unsuccessful"]
        render "api/errors/errors", status: 500
      end
    else
      @errors = ["You are not logged in"]
      render "api/errors/errors", status: 500
    end
  end

  def update
  end

  def destroy
  end

end
