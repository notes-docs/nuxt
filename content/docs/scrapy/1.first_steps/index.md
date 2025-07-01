---
title: Scrapy 2.13 文档
description: 'Scrapy 是一个快速的高级 网络爬虫 和 网络抓取 框架，用于爬取网站并从中提取结构化数据。它可以用于广泛的用途，从数据挖掘到监控和自动化测试。'
---

## 获取帮助

遇到麻烦了吗？我们很乐意提供帮助！

* 尝试 [常见问题](https://docs.scrapy.org/en/latest/faq.html) ——它有常见问题的答案。
* 正在寻找具体信息？尝试 [索引](https://docs.scrapy.org/en/latest/genindex.html) 或 [模块索引](https://docs.scrapy.org/en/latest/py-modindex.html)。
* 在 [StackOverflow 上使用 scrapy 标签](https://stackoverflow.com/tags/scrapy) 提问或搜索问题。
* 在 [Scrapy subreddit](https://www.reddit.com/r/scrapy/) 上提问或搜索问题。
* 在 [scrapy-users 邮件列表](https://groups.google.com/forum/#!forum/scrapy-users) 的档案中搜索问题。
* 在 [#scrapy IRC 频道](irc://irc.freenode.net/scrapy) 提问。
* 在我们的 [问题追踪器](https://github.com/scrapy/scrapy/issues) 中报告 Scrapy 的错误。
* 加入 Discord 社区 [Scrapy Discord](https://discord.com/invite/mv3yErfpvq)。

## 第一步

* [Scrapy 概览](https://docs.scrapy.org/en/latest/intro/overview.html)

  了解 Scrapy 是什么以及它如何帮助你。

* [安装指南](https://docs.scrapy.org/en/latest/intro/install.html)

  在你的电脑上安装 Scrapy。

* [Scrapy 教程](https://docs.scrapy.org/en/latest/intro/tutorial.html)

  编写你的第一个 Scrapy 项目。

* [示例](https://docs.scrapy.org/en/latest/intro/examples.html)

  通过玩一个预制的 Scrapy 项目来了解更多。

## 基本概念

* [命令行工具](https://docs.scrapy.org/en/latest/topics/commands.html)
  
  了解用于管理你的 Scrapy 项目的命令行工具。

* [爬虫](https://docs.scrapy.org/en/latest/topics/spiders.html)

  编写爬取网站的规则。

* [选择器](https://docs.scrapy.org/en/latest/topics/selectors.html)

  使用 XPath 从网页中提取数据。

* [Scrapy shell](https://docs.scrapy.org/en/latest/topics/shell.html)

  在交互式环境中测试你的提取代码。

* [Item](https://docs.scrapy.org/en/latest/topics/items.html)

  定义你要抓取的数据。

* [Item Loaders](https://docs.scrapy.org/en/latest/topics/loaders.html)

  用提取的数据填充你的 Item。

* [Item Pipeline](https://docs.scrapy.org/en/latest/topics/item-pipeline.html)

  后处理和存储你抓取的数据。

* [Feed 导出](https://docs.scrapy.org/en/latest/topics/feed-exports.html)

  使用不同的格式和存储输出你抓取的数据。

* [请求与响应](https://docs.scrapy.org/en/latest/topics/request-response.html)

  了解用于表示 HTTP 请求和响应的类。

* [链接提取器](https://docs.scrapy.org/en/latest/topics/link-extractors.html)

  从页面中提取要跟随的链接的便捷类。

* [设置](https://docs.scrapy.org/en/latest/topics/settings.html)

  了解如何配置 Scrapy 并查看所有 [可用设置](https://docs.scrapy.org/en/latest/topics/settings.html#topics-settings-ref)。

* [异常](https://docs.scrapy.org/en/latest/topics/exceptions.html)

  查看所有可用的异常及其含义。

## 内置服务

* [日志](https://docs.scrapy.org/en/latest/topics/logging.html)

  了解如何在 Scrapy 中使用 Python 的内置日志功能。

* [统计收集](https://docs.scrapy.org/en/latest/topics/stats.html)

  收集有关你的抓取爬虫的统计信息。

* [发送电子邮件](https://docs.scrapy.org/en/latest/topics/email.html)

  在某些事件发生时发送电子邮件通知。

* [Telnet 控制台](https://docs.scrapy.org/en/latest/topics/telnetconsole.html)

  使用内置的 Python 控制台检查正在运行的爬虫。

## 解决具体问题

* [常见问题](https://docs.scrapy.org/en/latest/faq.html)

  获取最常见问题的答案。

* [调试爬虫](https://docs.scrapy.org/en/latest/topics/debug.html)

  了解如何调试 Scrapy 爬虫的常见问题。

* [爬虫契约](https://docs.scrapy.org/en/latest/topics/contracts.html)

  了解如何使用契约来测试你的爬虫。

* [常见实践](https://docs.scrapy.org/en/latest/topics/practices.html)

  熟悉一些 Scrapy 常见实践。

* [大规模爬取](https://docs.scrapy.org/en/latest/topics/broad-crawls.html)

  调整 Scrapy 以并行爬取大量域名。

* [使用浏览器的开发者工具进行抓取](https://docs.scrapy.org/en/latest/topics/developer-tools.html)

  了解如何使用浏览器的开发者工具进行抓取。

* [选择动态加载的内容](https://docs.scrapy.org/en/latest/topics/dynamic-content.html)

  读取动态加载的网页数据。

* [调试内存泄漏](https://docs.scrapy.org/en/latest/topics/leaks.html)

  了解如何在爬虫中查找并消除内存泄漏。

* [下载和处理文件和图像](https://docs.scrapy.org/en/latest/topics/media-pipeline.html)

  下载与你抓取的 Item 相关联的文件和/或图像。

* [部署爬虫](https://docs.scrapy.org/en/latest/topics/deploy.html)

  部署你的 Scrapy 爬虫并在远程服务器上运行它们。

* [AutoThrottle 扩展](https://docs.scrapy.org/en/latest/topics/autothrottle.html)

  根据负载动态调整爬取速率。

* [基准测试](https://docs.scrapy.org/en/latest/topics/benchmarking.html)

  检查 Scrapy 在你的硬件上的性能。

* [任务：暂停和恢复爬取](https://docs.scrapy.org/en/latest/topics/jobs.html)

  了解如何暂停和恢复大型爬虫的爬取。

* [协程](https://docs.scrapy.org/en/latest/topics/coroutines.html)

  使用 [协程语法](https://docs.python.org/3/reference/compound_stmts.html#async)。

* [asyncio](https://docs.scrapy.org/en/latest/topics/asyncio.html)

  使用 `asyncio` 和 `asyncio` 驱动的库。

## 扩展 Scrapy

* [架构概览](https://docs.scrapy.org/en/latest/topics/architecture.html)

  了解 Scrapy 架构。

* [附加组件](https://docs.scrapy.org/en/latest/topics/addons.html)

  启用和配置第三方扩展。

* [下载器中间件](https://docs.scrapy.org/en/latest/topics/downloader-middleware.html)

  自定义页面如何被请求和下载。

* [爬虫中间件](https://docs.scrapy.org/en/latest/topics/spider-middleware.html)

  自定义爬虫的输入和输出。

* [扩展](https://docs.scrapy.org/en/latest/topics/extensions.html)

  使用你的自定义功能扩展 Scrapy。

* [信号](https://docs.scrapy.org/en/latest/topics/signals.html)

  查看所有可用的信号以及如何使用它们。

* [调度器](https://docs.scrapy.org/en/latest/topics/scheduler.html)

  了解调度器组件。

* [Item 导出器](https://docs.scrapy.org/en/latest/topics/exporters.html)

  快速将你抓取的 Item 导出到文件（XML、CSV 等）。

* [组件](https://docs.scrapy.org/en/latest/topics/components.html)

  了解构建自定义 Scrapy 组件时的通用 API 和一些良好实践。

* [核心 API](https://docs.scrapy.org/en/latest/topics/api.html)

  在扩展和中间件中使用它来扩展 Scrapy 功能。

## 所有其余部分

* [发布说明](https://docs.scrapy.org/en/latest/news.html)

  查看最新 Scrapy 版本中的更改。

* [贡献 Scrapy](https://docs.scrapy.org/en/latest/contributing.html)

  了解如何为 Scrapy 项目做贡献。

* [版本控制和 API 稳定性](https://docs.scrapy.org/en/latest/versioning.html)

  了解 Scrapy 版本控制和 API 稳定性。
