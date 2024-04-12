FROM python:3.10-alpine

RUN apk add --no-cache mysql-client mysql-dev gcc musl-dev

WORKDIR /usr/src/app


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY app/ .

EXPOSE 8000


RUN adduser --disabled-password --no-create-home django-user
USER django-user


