FROM node:16-alpine

# Workdir for node package
WORKDIR /data/app

COPY . /data/app

# Install Tini
RUN apk --no-cache --no-progress add tini

# Create custom entrypoint supports environment variables
RUN printf "#!/bin/ash\nnpm run start" > /entrypoint.sh && \
  chmod +x /entrypoint.sh

# Install production node_modules
RUN npm i --omit=dev --force --unsafe-perm

ENTRYPOINT ["/sbin/tini", "-vg", "--", "/entrypoint.sh"]
