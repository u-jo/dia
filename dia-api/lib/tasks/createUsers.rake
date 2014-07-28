require 'faker'

namespace :api do
	desc "create some fake users"
	task :fake_users => :environment do
		print "How many fake users?"
		num_people = $stdin.gets.to_i
		num_people.times do
			email = Faker::Internet.email
			password = "password1"
			Api::User.create(email: email,
				password: password, password_confirmation: password)

		end
		print "#{num_people} created"
	end	

end