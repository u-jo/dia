class Api::SessionsController < ApplicationController

	def new
	end

	def create
		@user = Api::User.find_by(email: params[:email].downcase)
		remember_token = Api::User.new_remember_token
		@user.update_attribute(:remember_token, Api::User.digest(remember_token))
		if (@user && @user.authenticate(params[:password]))
			respond_to do |format|
				format.json {
					render	:status => 200,
							:json => {
								success: true,
								info: "Logged in",
								user: @user,
								remember_token: remember_token
							}
				}
			end
		else 
			respond_to do |format|
				format.json {
					render	:status => 200,
							:json => {
								success: false,
								info: "Wrong password or email",
							}
				}
			end
		end
	end

	def destroy
	end

end
