class DeveloperPanelController < ApplicationController
  #layout :developer_panel
  def authenticate
    if ! (user_signed_in? && current_user.role == 'developer' )
      redirect_to controller: 'devise/sessions', action: 'new'
      return false
    end
    return true
  end
  def index
    if authenticate
      render action: 'command_line'
    end
  end
  def command_line

  end
end
