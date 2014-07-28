class Api::UsersController < ApplicationController
	skip_before_filter :authenticate, :only => :create
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
				format.json { 
					render :status => 200,
							:json => {
								success: true,
								info: "User created and logged in",
								remember_token: @user.remember_token,
								user: @user
						 	}
				}
			else
				format.json { 
					render 	json: @user.errors, 
							status: :unprocessable_entity 
				}
			end
		end
	end

	private 

	def user_params
		params.require(:user).permit(:password, :password_confirmation, :email)
	end
end	
