class Api::UsersController < ApplicationController

	def show
		@user = Api::User.find(params[:id])

		respond_to do |format| 
			format.html
			format.json { render json: @user }
		end
	end
end	
