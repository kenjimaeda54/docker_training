FROM  python:3.0


RUN   apt-get update && apt-get istall -y python-pyp python-dev


WORKDIR  /app.py

RUN  pip install flask && pip install request

COPY . .

CMD [ "python3", "./app.py" ]