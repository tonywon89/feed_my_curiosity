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
    # @collection = Collection.new(collection_params)
    # @collection.user_id = current_user.id
    #
    # if @collection.save
    #   render :show
    # else
    #   @errors = @collection.errors.full_messages
    #   render "api/errors/errors", status: 500
    # end
  end

  def update
  end

  def destroy
  end

  def collection_params
    params.require(:collection).permit(:name)
  end

end
