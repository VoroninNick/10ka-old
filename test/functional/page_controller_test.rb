# -*- encoding : utf-8 -*-
require 'test_helper'

class PageControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get contacts" do
    get :contacts
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

end
