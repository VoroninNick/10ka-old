# -*- encoding : utf-8 -*-
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  #:domain               => "voroninstudio.eu",
  :user_name            => "partido12@gmail.com",
  :password             => "pasha1991",
  :authentication       => "plain",
  :enable_starttls_auto => true
}