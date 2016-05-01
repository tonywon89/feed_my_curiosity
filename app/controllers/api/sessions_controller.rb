class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)

    if @user
      login!(@user)
      render "api/users/show"
    else
      @errors = ["Invalid username or password"]
      render "api/errors/errors", status: 500
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      @errors = ["There is no logged in user to log out"]
      render "api/errors/errors", status: 500
    end
  end

end
