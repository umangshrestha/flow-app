## This code is the backend access for the Flow Project
```
$ docker build . -t backend
$ docker run -it backend
```
* [Examples](./example/)
* [Dependencies](./requirements.txt)


.env
```
DATABASE_URL=mongodb+srv://...
SECRET_KEY=
ALLOWED_HOST=
```