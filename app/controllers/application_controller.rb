class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    @current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def logged_out?
    !current_user
  end

  def ensure_logged_in
    render json: {error: ["You Must Be Logged In To View This Page"]} unless logged_in?
  end

end
