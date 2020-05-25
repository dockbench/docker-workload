FROM python:3

WORKDIR /usr/src/app

COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r ./requirements.txt

COPY ./app.py ./
CMD [ "python3", "app.py" ]

EXPOSE 5000
