### RabbitMQ Plugins
Add any RabbitMQ plugins into the `plugins` folder, then inside the `Dockerfile` add this line below for each plugin.

```dockerfile
RUN rabbitmq-plugins enable name_of_plugin_here
```
