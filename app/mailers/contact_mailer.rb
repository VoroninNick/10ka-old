class ContactMailer < ActionMailer::Base
  default from: "support@voroninstudio.eu"
  default to: 	"me@vikewoods.com"

  def new_message(message)
    @message = message
    mail(:subject => "New message from your website!")
  end

end
