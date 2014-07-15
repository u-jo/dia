class Api::CsrfResponderController < ApplicationController
	skip_before_filter :authenticate 
	def index
		response = Hash.new
		response[:response] = "ok"
		respond_to do |format|
			format.json { render json:  response  }
		end
	end
end
