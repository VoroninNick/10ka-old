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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130719142410) do

  create_table "articles", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
    t.string   "slug"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "articles", ["slug"], :name => "index_articles_on_slug"

  create_table "banners", :force => true do |t|
    t.string   "name"
    t.string   "description"
    t.string   "banner_file_name"
    t.string   "banner_content_type"
    t.integer  "banner_file_size"
    t.datetime "banner_updated_at"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "catalogs", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "slug"
    t.string   "home_position_id"
  end

  add_index "catalogs", ["home_position_id"], :name => "index_catalogs_on_home_position_id"
  add_index "catalogs", ["slug"], :name => "index_catalogs_on_slug"

  create_table "child_catalogs", :force => true do |t|
    t.string   "name"
    t.integer  "parent_catalog_id"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
    t.string   "slug"
    t.text     "description"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "child_catalogs", ["slug"], :name => "index_child_catalogs_on_slug"

  create_table "ckeditor_assets", :force => true do |t|
    t.string   "data_file_name",                  :null => false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    :limit => 30
    t.string   "type",              :limit => 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], :name => "idx_ckeditor_assetable"
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], :name => "idx_ckeditor_assetable_type"

  create_table "home_positions", :force => true do |t|
    t.string   "name"
    t.integer  "catalog_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "new_catalogs", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "slug"
  end

  add_index "new_catalogs", ["slug"], :name => "index_new_catalogs_on_slug"

  create_table "new_child_catalogs", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "new_parent_catalog_id"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
    t.string   "slug"
    t.integer  "new_product_id"
  end

  add_index "new_child_catalogs", ["slug"], :name => "index_new_child_catalogs_on_slug"

  create_table "new_parent_catalogs", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "new_catalog_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.string   "slug"
  end

  add_index "new_parent_catalogs", ["slug"], :name => "index_new_parent_catalogs_on_slug"

  create_table "new_products", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "new_child_catalog_id"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
    t.string   "slug"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "new_products", ["slug"], :name => "index_new_products_on_slug"

  create_table "parent_catalogs", :force => true do |t|
    t.string   "name"
    t.integer  "catalog_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "slug"
    t.text     "description"
  end

  add_index "parent_catalogs", ["slug"], :name => "index_parent_catalogs_on_slug"

  create_table "products", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "child_catalog_id"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
    t.string   "slug"
    t.integer  "parent_catalog_id"
  end

  add_index "products", ["slug"], :name => "index_products_on_slug"

  create_table "sponsors", :force => true do |t|
    t.string   "name"
    t.string   "link"
    t.string   "description"
    t.string   "sponsor_file_name"
    t.string   "sponsor_content_type"
    t.integer  "sponsor_file_size"
    t.datetime "sponsor_updated_at"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
