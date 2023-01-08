ARG VER=1.29.0
FROM mcr.microsoft.com/playwright:v${VER}-focal

RUN apt update && \
    apt install -y \
        less \
        vim

USER pwuser
WORKDIR /home/pwuser
RUN npm i -D playwright@${VER} \
             express \
             pretty

COPY fetch.js fetch.js
COPY server.js server.js

CMD node server.js
