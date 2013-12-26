# -*- encoding : utf-8 -*-
class ContactController < ApplicationController

	def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    render :inline => @message.name.inspect

    if @message.valid? && 1 == 2
      new_message = ContactMailer.new_message(@message)
      new_message.deliver

      redirect_to(root_path, :notice => "Message was successfully sent.")
    else
      #flash.now.alert = "Please fill all fields."
      #render :new
    end
  end

end
