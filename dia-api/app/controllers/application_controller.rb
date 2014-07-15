class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception
	#before_filter :authenticate  
	after_filter  :set_csrf_cookie_for_ng
	def default_serializer_options
		{ root: false }
	end


	def current_user=(user)
		@current_user = user
	end

	def get_current_user(remember_token)
		remember_token = Api::User.digest(remember_token)
		@current_user ||= Api::User.find_by(remember_token: remember_token)
	end


	def set_csrf_cookie_for_ng
		cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
	end

	protected
	  def verified_request?
	    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
	  end  

	  def authenticate
	  	authenticate_token || render_unauthorized
	  end

	  def render_unauthorized
	    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
	    respond_to do |format| 
	    	format.json {
	    		render json: {
	    			message: 'Bad credentials',
	    			authenticated: false
	    		}, 
	    		status: 401
	    	}
	    end
	  end
	  
	  def authenticate_token
	  	authenticate_with_http_token do |token, options|
	  		Api::User.find_by(auth_token: token)
	  	end
	  end
end
