class Api::FeedsController < ApplicationController

  def index
    feeds = Feed.all

    @feedjira_feeds = feeds.map do |feed|
      feed.parse
    end

    render :index
  end

  def show
    @feedjira_feed = Feed.find(params[:id]).parse
    render :show
  end

end
