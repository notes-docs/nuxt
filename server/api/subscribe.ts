// server/api/subscribe.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // 简单的服务端校验（生产环境中建议更严格）
    if (!body.email || typeof body.email !== 'string' || !body.email.includes('@')) {
        throw createError({
            statusCode: 400,
            statusMessage: JSON.stringify([{ message: '请输入有效邮箱' }])
        })
    }

    // 模拟发送邮件或存储数据库逻辑（这里你可以调用数据库或第三方服务）
    try {
        // TODO: 替换为实际业务逻辑，如发送邮件、写入 SQLite、调用 Mailchimp 等
        console.log('New subscription:', body.email)

        return {
            success: true,
            message: '订阅请求已接收'
        }
    } catch (err) {
        throw createError({
            statusCode: 500,
            statusMessage: JSON.stringify([{ message: '服务器内部错误，请稍后再试。' }])
        })
    }
})
