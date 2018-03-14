class Api::CartItemsController < ApplicationController

  def create
    @cart_item = CartItem.new(product_id: params[:product_id])
    @cart_item.user_id = current_user.id

    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def index
    @cart_items = current_user.cart_items.includes(product: :user)
    render :index
  end

  def show
    @cart_item = CartItem.find(params[:id])
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :show
  end

  private
  def cart_params
    params.require(:cart_items).permit(:product_id)
  end

end
