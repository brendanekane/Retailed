class Api::ProductsController < ApplicationController

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  def index
    if params[:user_id]
      @products = Product.where(user_id: params[:user_id])
    else
      @products = Product.all
    end
  end


  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    end
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    render :show
  end

  private
  def product_params
    params.require(:product).permit(:user_id, :price, :designer, :name, :clothing_type, :size, :clothing_category)
  end
end
