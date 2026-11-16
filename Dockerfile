
FROM nodered/node-red:latest

ENV TZ=Asia/Tehran
ENV NODE_RED_ENABLE_PROJECTS=false

COPY settings.js /data/settings.js

EXPOSE 10000

CMD ["npm", "start", "--", "--userDir", "/data", "--port", "10000", "--settings", "/data/settings.js"]
