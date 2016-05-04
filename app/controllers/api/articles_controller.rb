class Api::ArticlesController < ApplicationController
  def index
    if current_user
      @articles = Article.where(user_id: current_user.id)
      render :index
    else
      render json: []
    end
  end

  def create
    if current_user
      @article = Article.new(article_params)
      @article.user_id = current_user.id

      if @article.save
        render :show
      else
        @errors = @collection.errors.full_messages
        render "api/errors/errors", status: 422
      end
    else
      @errors = ["You are not logged in"]
      render "api/errors/errors", status: 403
    end
  end

  def show
    @article = Article.find_by(id: params[:id])

    if @article
      render :show
    else
      @errors = ["Article not found"]
      render "api/errors/errors", status: 404
    end
  end

  def destroy
    @article = Article.find_by(id: params[:id])

    if @article
      @article.destroy
      render :show
    else
      @errors = ["Article not found. Cannot delete"]
      render "api/errors/errors", status: 404
    end
  end

  private

  def article_params
    params.require(:article).permit(
      :title,
      :url,
      :published,
      :entry_id,
      :summary,
      :author,
    )
  end

end
