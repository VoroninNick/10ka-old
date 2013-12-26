# -*- encoding : utf-8 -*-
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "voroninstudio.eu",
  :user_name            => "p.korenev",
  :password             => "pasha#1991",
  :authentication       => "plain",
  :enable_starttls_auto => true
}
