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
    if authenticate
      @command = params[:cmd]
      #sudo_pass = File.read("config/initializers/dev.rb")
      sudo_pass = Rails.configuration.dev_pass
      @build_command = "echo '#{sudo_pass}' | sudo -S #{@command}"
      @command_result = %x(#{@build_command})
      render inline: "command_result: #{@build_command}"

    end

    #render inline: "#{ user_signed_in? && current_user.role == 'developer' }"
  end
end
