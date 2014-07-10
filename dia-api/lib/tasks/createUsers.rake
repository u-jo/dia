require 'faker'

namespace :api do
	desc "create some fake users"
	task :fake_users => :environment do
		print "How many fake users?"
		num_people = $stdin.gets.to_i
		num_people.times do
			first_name = Faker::Name.first_name
			last_name = Faker::Name.last_name
			email = Faker::Internet.email
			password = "password1"
			Api::User.create(first_name: first_name, last_name: last_name, email: email,
				password: password, password_confirmation: password)

		end
		print "#{num_people} created"
	end	

end