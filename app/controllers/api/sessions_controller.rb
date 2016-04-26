class Api::SessionsController < ApplicationController

  def create
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login!(@user)
      render "api/users/show"
    else
      @errors = ["Invalid email or password"]
      render "api/users/errors", status: 500
    end
  end

  def destroy
    logout!
    render json: {}
  end

end
