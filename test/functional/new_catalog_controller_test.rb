require 'test_helper'

class NewCatalogControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get get_parent" do
    get :get_parent
    assert_response :success
  end

  test "should get get_child" do
    get :get_child
    assert_response :success
  end

  test "should get get_product" do
    get :get_product
    assert_response :success
  end

end
