class Api::DiaryController < ApplicationController

	def show 
	end

	def create
		current_user = Api::User.find(params[:id])
		diary_page = current_user.diary.pages.create(page_params)
		if (diary_page)
			respond_to do |format|
				format.json {
					render :status => 200,
						:json => {
							:success => true
						}
				}
			end
		else
			respond_to do |format|
				format.json {
					render :status => 500,
						:json => {
							:success => false
						}
				}
			end
		end
		
	end

	private 
		def page_params
			params.require(:page).permit(:title, :page_text)
		end
end
