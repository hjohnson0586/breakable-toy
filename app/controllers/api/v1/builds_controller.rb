class Api::V1::BuildsController < ApplicationController
  def index
   	builds = Build.all
      render json: {specs: builds}, status: :ok
  end
end
