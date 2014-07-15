class Api::User < ActiveRecord::Base
	before_save { self.email = email.downcase }
	validates :first_name, presence: true, length: { maximum: 50 }
	validates :last_name, presence: true, length: { maximum: 50 }
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence:   true,
	            format:     { with: VALID_EMAIL_REGEX },
	            uniqueness: { case_sensitive: false }
	has_secure_password
	validates :password, length: { minimum: 6 }
	before_create :create_remember_token, :set_auth_token

	def new_remember_token
		SecureRandom.urlsafe_base64
	end

	def digest(token)
		Digest::SHA1.hexdigest(token.to_s)
	end

	class << self
		def new_remember_token
			SecureRandom.urlsafe_base64
		end

		def digest(token)
			Digest::SHA1.hexdigest(token.to_s)
		end
	end

	private 
		def create_remember_token
			self.remember_token = self.digest(self.new_remember_token)
		end

		def set_auth_token
	      	return if auth_token.present?

	      	begin
	        	self.auth_token = SecureRandom.hex
	      	end while self.class.exists?(auth_token: self.auth_token)
	    end
end