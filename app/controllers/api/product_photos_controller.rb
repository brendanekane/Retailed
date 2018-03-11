class Api::ProductPhotosController < ApplicationController


  def create
    @product_photo = ProductPhoto.new(product_photo_params)
    if @product_photo.save
      render :show
    else
      render json: @product_photo.errors.full_messages, status: 422
    end
  end

  def show
    @product_photo = ProductPhoto.find(params[:id])
  end

  private

  def product_photo_params
    params.require(:product_photo).permit(:product_id)
  end

end
