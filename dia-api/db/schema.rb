# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140728011401) do

  create_table "api_diaries", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "api_diaries", ["user_id"], name: "index_api_diaries_on_user_id"

  create_table "api_pages", force: true do |t|
    t.string   "page_text"
    t.integer  "diary_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
  end

  add_index "api_pages", ["diary_id"], name: "index_api_pages_on_diary_id"

  create_table "api_users", force: true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "remember_token"
    t.string   "auth_token"
  end

  add_index "api_users", ["auth_token"], name: "index_api_users_on_auth_token"
  add_index "api_users", ["email"], name: "index_api_users_on_email", unique: true
  add_index "api_users", ["remember_token"], name: "index_api_users_on_remember_token"

end
