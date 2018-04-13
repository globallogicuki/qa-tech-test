. project.cfg

docker build --tag "$repo:latest" . && \
docker tag "$repo:latest" "$repo:$tag"
