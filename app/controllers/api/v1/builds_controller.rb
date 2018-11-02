class Api::V1::BuildsController < ApplicationController
  def index
   	builds = Build.all
      render json: builds
  end

  def show
    build = [Build.find(params[:id])]
  end
end
