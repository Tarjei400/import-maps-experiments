# Experiments with import maps: 

1. Import maps server from nginx -> http://localhost
2. Import maps served with significant delay http://localhost/delay

3. Import maps are saved and served from consul key-value store http://localhost/consul
Ad.3 First you have add a import-map.json value to a store, consul ui is available under http://localhost:8500

To start :
```
docker-compose up

```
