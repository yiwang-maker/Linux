<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">学习笔记</router-link>
      <div class="nav-links">
        <router-link to="/ai" class="nav-link">AI学习</router-link>
        <router-link to="/marxism" class="nav-link">马克思主义</router-link>
        <router-link to="/about" class="nav-link">关于我</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped lang="scss">
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;

  .nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: #666;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }

    &.router-link-active {
      color: #1890ff;
      font-weight: 500;
    }
  }
}
</style> 