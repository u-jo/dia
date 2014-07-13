class Api::UsersController < ApplicationController

	def show
		@user = Api::User.find(params[:id])

		respond_to do |format| 
			format.html
			format.json { render json: @user }
		end
	end

	def create
		@user = Api::User.create(user_params)
		respond_to do |format|
			if (@user.save)
				format.json { render json: @user }
			else
				format.json { render json: @user.errors, status: :unprocessable_entity }
			end
		end
	end

	private 

	def user_params
		params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation, :email)
	end
end	
