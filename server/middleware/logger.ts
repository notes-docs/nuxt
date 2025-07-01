// 端点和中间件都可以这样定义
export default defineEventHandler((event) => {
  const { req, res } = event.node;
  const startTime = Date.now(); // 请求开始时间
  const { method, url } = req;
  const statusCode = res.statusCode;

  console.log(`${method} ${url} - ${statusCode} [start:${startTime}ms]`);
  // 响应结束时记录日志
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`${method} ${url} - ${statusCode} [duration:${duration}ms]`);
  });
});
