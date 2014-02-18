require 'test_helper'

class DeveloperPanelControllerTest < ActionController::TestCase
  test "should get command_line" do
    get :command_line
    assert_response :success
  end

end
