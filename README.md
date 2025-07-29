# Viking Test 组件库

一个基于 React 的现代化 UI 组件库，参照 vilishipModel 项目结构搭建。

## 🚀 特性

- ⚡️ 基于 React 19 和 TypeScript
- 🎨 现代化的设计系统
- 📚 完整的 Storybook 文档
- 🎯 类型安全的组件 API
- 📦 模块化的组件结构
- 🎪 丰富的组件变体

## 📦 已实现的组件

### Button 组件
- 支持多种类型：`primary`、`default`、`dashed`、`link`、`text`
- 支持多种尺寸：`large`、`middle`、`small`
- 支持加载状态和禁用状态
- 完整的 TypeScript 类型定义

### Input 组件
- 支持多种尺寸：`large`、`middle`、`small`
- 支持禁用状态
- 支持受控和非受控模式
- 完整的 TypeScript 类型定义

## 🛠️ 开发环境

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm start
```

### 启动 Storybook
```bash
pnpm storybook
```

### 构建项目
```bash
pnpm build
```

### 运行测试
```bash
pnpm test
```

## 📁 项目结构

```
src/
├── components/          # 组件目录
│   ├── Button/         # Button 组件
│   │   ├── index.tsx   # 组件主文件
│   │   ├── style.scss  # 组件样式
│   │   └── Button.stories.tsx  # Storybook 故事
│   └── Input/          # Input 组件
│       ├── index.tsx   # 组件主文件
│       ├── style.scss  # 组件样式
│       └── Input.stories.tsx  # Storybook 故事
├── styles/             # 全局样式
│   └── index.scss      # 主样式文件
└── index.tsx           # 组件库入口文件
```

## 🎨 使用示例

### Button 组件
```tsx
import { Button } from 'viking-test';

// 基础用法
<Button>默认按钮</Button>

// 主要按钮
<Button type="primary">主要按钮</Button>

// 不同尺寸
<Button size="large">大按钮</Button>
<Button size="small">小按钮</Button>

// 加载状态
<Button loading>加载中</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>
```

### Input 组件
```tsx
import { Input } from 'viking-test';

// 基础用法
<Input placeholder="请输入内容" />

// 不同尺寸
<Input size="large" placeholder="大尺寸输入框" />
<Input size="small" placeholder="小尺寸输入框" />

// 禁用状态
<Input disabled placeholder="禁用状态" />

// 受控组件
<Input value={value} onChange={handleChange} />
```

## 🎯 设计系统

### 颜色变量
- `--primary-color`: #1890ff (主色调)
- `--success-color`: #52c41a (成功色)
- `--warning-color`: #faad14 (警告色)
- `--error-color`: #f5222d (错误色)

### 尺寸变量
- `--font-size-base`: 14px (基础字体大小)
- `--border-radius-base`: 6px (基础圆角)
- `--border-color-base`: #d9d9d9 (基础边框色)

## 🔧 技术栈

- **React**: 19.1.0
- **TypeScript**: 4.9.5
- **Storybook**: 8.6.14
- **SCSS**: 样式预处理
- **pnpm**: 包管理器

## 📝 开发规范

1. **组件命名**: 使用 PascalCase
2. **文件命名**: 使用 kebab-case
3. **样式类名**: 使用 `viking-` 前缀
4. **TypeScript**: 为所有组件提供完整的类型定义
5. **Storybook**: 为每个组件创建完整的故事文档

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

MIT License

## 🙏 致谢

本项目参照了 [vilishipModel](https://github.com/vikingmute/vikingship) 的项目结构，感谢原作者的优秀设计。
