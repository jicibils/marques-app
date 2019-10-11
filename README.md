# To create the image

`docker image build -t react-docker-101:app .`

if you pull this image from docker-hub the above command is no necessary

---

# To see within the container

`docker container run -it react-docker-101:app bash`

---

# To run the image

`docker container run -it -p 3000:3000 react-docker-101:app`

---

# To run the image with hot-reloading

`docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react-docker-101:app`

---

# To build

`docker container run -it -v \$(pwd):/app react-docker-101:app build`

---

# To run tests build

`docker container run -it -v \$(pwd):/app react-docker-101:app test`
