class Api::V1::PartsController < ApplicationController
  def index
    parts = Part.find_by_build_id(params[:build_id])
      render json: parts
  end
end
