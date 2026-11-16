
FROM nodered/node-red:latest

ENV NODE_RED_ENABLE_PROJECTS=false
ENV TZ=Asia/Tehran

EXPOSE 1880

CMD ["npm", "start", "--", "--userDir", "/data"]
