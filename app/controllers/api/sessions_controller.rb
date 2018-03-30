class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:products).find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username or Password"], status: 400
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["Not signed in"], status: 404
    end
  end
end
