FROM python:3.10
LABEL maintainer="Umang Shrestha <umang@uwindsor.com>"
LABEL desc="Backend for Flow WebApp"
COPY . . 
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# installing dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
# for Django
EXPOSE 8000
# for MongoDB
EXPOSE 27017
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]