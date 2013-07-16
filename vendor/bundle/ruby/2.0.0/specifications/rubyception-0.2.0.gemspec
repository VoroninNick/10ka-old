# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rubyception"
  s.version = "0.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Tye Shavik, Andrew Brown"]
  s.date = "2012-11-30"
  s.description = "Realtime Rails log in your browser. For Rails 3.1+"
  s.email = ["tyeshavik@gmail.com"]
  s.homepage = "http://github.com/tye/rubyception"
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.3"
  s.summary = "Realtime Rails log in your browser"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>, [">= 0"])
      s.add_runtime_dependency(%q<haml>, [">= 0"])
      s.add_runtime_dependency(%q<sass>, [">= 0"])
      s.add_runtime_dependency(%q<jenny>, [">= 0"])
      s.add_runtime_dependency(%q<em-websocket>, [">= 0"])
      s.add_runtime_dependency(%q<compass>, [">= 0"])
      s.add_runtime_dependency(%q<coffee-script>, [">= 0"])
      s.add_development_dependency(%q<sqlite3>, [">= 0"])
    else
      s.add_dependency(%q<rails>, [">= 0"])
      s.add_dependency(%q<haml>, [">= 0"])
      s.add_dependency(%q<sass>, [">= 0"])
      s.add_dependency(%q<jenny>, [">= 0"])
      s.add_dependency(%q<em-websocket>, [">= 0"])
      s.add_dependency(%q<compass>, [">= 0"])
      s.add_dependency(%q<coffee-script>, [">= 0"])
      s.add_dependency(%q<sqlite3>, [">= 0"])
    end
  else
    s.add_dependency(%q<rails>, [">= 0"])
    s.add_dependency(%q<haml>, [">= 0"])
    s.add_dependency(%q<sass>, [">= 0"])
    s.add_dependency(%q<jenny>, [">= 0"])
    s.add_dependency(%q<em-websocket>, [">= 0"])
    s.add_dependency(%q<compass>, [">= 0"])
    s.add_dependency(%q<coffee-script>, [">= 0"])
    s.add_dependency(%q<sqlite3>, [">= 0"])
  end
end
