# -*- encoding : utf-8 -*-
class ContactMailer < ActionMailer::Base
  default from: "support@voroninstudio.eu"
  default to: 	["voronin.nick@gmail.com", "p.korenev@voroninstudio.eu"]

  def new_message(message)
    @message = message
    mail(:subject => "New message from your website!")
  end

end
