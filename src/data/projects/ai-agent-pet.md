---
title: "ESP32-S3 AI 智能宠物车"
summary: "基于 ESP32-S3 与小智 AI 固件搭建的语音交互硬件原型，集成 OLED 状态显示与移动底盘。"
year: 2026
type: "AI 硬件原型"
tags:
  - "ESP32-S3"
  - "AI Voice"
  - "OLED"
  - "Embedded"
  - "Hardware"
featured: true
order: 2
accent: "#b8dbe8"
cover: "/media/ai-agent-pet/cover.jpg"
---

## 项目概述

这是一个基于 ESP32-S3 的 AI 语音交互硬件原型。项目将小智 AI 固件部署到开发板，并完成 OLED 显示、语音交互模块和移动底盘的硬件集成。

设备联网后可以显示连接状态、对话状态和简单表情，为后续扩展成桌面智能宠物或移动语音助手提供实验平台。

![ESP32-S3 AI 智能宠物车成品展示](/media/ai-agent-pet/cover.jpg)

## 主要功能

- Wi-Fi 网络连接与状态显示
- AI 语音对话交互
- OLED 中文状态界面
- 对话状态与表情反馈
- ESP32-S3 固件烧录和分区配置
- OTA 数据分区支持
- 固件资源包部署
- 移动底盘与硬件模块集成

## 硬件组成

- ESP32-S3 开发板
- OLED 显示屏
- 语音输入与输出模块
- 电机驱动与双轮移动底盘
- 面包板及连接线
- 独立供电模块

## 固件部署

当前项目目录包含：

- `bootloader.bin`：ESP32-S3 启动程序
- `partition-table.bin`：Flash 分区表
- `ota_data_initial.bin`：OTA 初始数据
- `xiaozhi.bin`：小智 AI 主固件
- `generated_assets.bin`：界面与资源数据

固件通过 Espressif Flash Download Tool 写入设备。烧录完成后，设备可以启动显示界面并进入网络和语音交互流程。

## 项目重点

本项目主要关注固件部署、硬件连接、模块联调和实体原型实现，而不是重新开发 AI 模型或小智 AI 的全部底层固件。

通过该项目完成了从固件文件、Flash 分区配置到实际硬件运行的完整部署过程，并验证了 OLED 状态显示与语音交互能力。

## 隐私与发布说明

网站仅展示经过筛选的成品图片。烧录日志可能包含设备 MAC 等唯一标识，因此不会公开上传；第三方烧录工具和固件文件也不会作为网站附件发布。