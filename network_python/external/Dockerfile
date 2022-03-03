FROM  python:3

RUN apt-get update -y && apt-get install  -y python3-pip python3-dev


WORKDIR  /app


RUN pip3 install Flask && pip3 install requests

COPY  . .

CMD [ "python3","./app.py" ]


