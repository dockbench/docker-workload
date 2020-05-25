# docker-workload

This is workload for docker performance test.

## node

This workload supports `--scale` tag.

```shell
$ docker-compose up -d --scale vue-admin=10 vue-admin
$ docker-compose ps
            Name                          Command               State           Ports
----------------------------------------------------------------------------------------------
docker-workload_vue-admin_1    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9522->9527/tcp
docker-workload_vue-admin_10   docker-entrypoint.sh npm r ...   Up      0.0.0.0:9517->9527/tcp
docker-workload_vue-admin_2    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9516->9527/tcp
docker-workload_vue-admin_3    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9520->9527/tcp
docker-workload_vue-admin_4    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9521->9527/tcp
docker-workload_vue-admin_5    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9518->9527/tcp
docker-workload_vue-admin_6    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9525->9527/tcp
docker-workload_vue-admin_7    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9523->9527/tcp
docker-workload_vue-admin_8    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9515->9527/tcp
docker-workload_vue-admin_9    docker-entrypoint.sh npm r ...   Up      0.0.0.0:9519->9527/tcp
```

10 containers start up.

<http://localhost:9522/>

![vue](README.assets/vue.png)

## python

```shell
$ docker-compose up -d --scale flask-profiler=10 flask-profiler
$ docker-compose ps
              Name                             Command               State           Ports
---------------------------------------------------------------------------------------------------
docker-workload_flask-profiler_1    python3 app.py                   Up      0.0.0.0:5010->5000/tcp
docker-workload_flask-profiler_10   python3 app.py                   Up      0.0.0.0:5005->5000/tcp
docker-workload_flask-profiler_2    python3 app.py                   Up      0.0.0.0:5009->5000/tcp
docker-workload_flask-profiler_3    python3 app.py                   Up      0.0.0.0:5007->5000/tcp
docker-workload_flask-profiler_4    python3 app.py                   Up      0.0.0.0:5004->5000/tcp
docker-workload_flask-profiler_5    python3 app.py                   Up      0.0.0.0:5006->5000/tcp
docker-workload_flask-profiler_6    python3 app.py                   Up      0.0.0.0:5003->5000/tcp
docker-workload_flask-profiler_7    python3 app.py                   Up      0.0.0.0:5008->5000/tcp
docker-workload_flask-profiler_8    python3 app.py                   Up      0.0.0.0:5002->5000/tcp
docker-workload_flask-profiler_9    python3 app.py                   Up      0.0.0.0:5012->5000/tcp
```

user:admin
password:admin

<http://127.0.0.1:5000/flask-profiler/>

![flask](README.assets/flask.png)

## Reference

1. <https://github.com/PanJiaChen/vue-element-admin>
2. <https://github.com/muatik/flask-profiler>
3. <https://github.com/brianfrankcooper/YCSB/tree/master/mongodb>
