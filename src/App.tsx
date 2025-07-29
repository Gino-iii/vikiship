import React from 'react';
import './App.css';
import { Button, Input } from './index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Viking Test 组件库</h1>
        <p>一个基于 React 的 UI 组件库</p>
      </header>

      <main className="App-main">
        <section className="component-section">
          <h2>Button 组件</h2>
          <div className="component-demo">
            <Button>默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="link">链接按钮</Button>
            <Button type="text">文本按钮</Button>
          </div>

          <div className="component-demo">
            <Button size="large">大按钮</Button>
            <Button size="middle">中按钮</Button>
            <Button size="small">小按钮</Button>
          </div>

          <div className="component-demo">
            <Button loading>加载中</Button>
            <Button disabled>禁用按钮</Button>
          </div>
        </section>

        <section className="component-section">
          <h2>Input 组件</h2>
          <div className="component-demo">
            <Input placeholder="请输入内容" />
            <Input size="large" placeholder="大尺寸输入框" />
            <Input size="small" placeholder="小尺寸输入框" />
          </div>

          <div className="component-demo">
            <Input disabled placeholder="禁用状态" />
            <Input value="预设值" placeholder="请输入内容" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 
