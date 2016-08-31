require "kemal"

get "/" do
  "Hello World!"
end

Kemal.config.port = 8000
Kemal.run
