class Api::UsersController < ApplicationController

  def show
    @user = current_user
    if @user
      render :show
    else
      render json: {}
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render "api/errors/errors", status: 500
    end
  end

  def destroy
    @user = User.find_by(email: params[:user][:email]);

    if @user
      @user.destroy
      render :show
    else
      @errors = ["There is no such user to delete."]
      render "api/errors/errors", status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
