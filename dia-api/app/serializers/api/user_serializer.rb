class Api::UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :remember_token, :auth_token, :created_at, :updated_at
end
