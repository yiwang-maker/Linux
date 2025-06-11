<template>
  <div class="home">
    <h1 class="title">欢迎来到我的学习笔记</h1>
    <div class="content">
      <p class="description">
        这里记录了我学习AI和马克思主义的心得体会，希望能与大家分享交流。
      </p>
      <div class="sections">
        <router-link to="/ai" class="section-card">
          <h2>AI学习</h2>
          <p>探索人工智能的奥秘</p>
        </router-link>
        <router-link to="/marxism" class="section-card">
          <h2>马克思主义</h2>
          <p>深入学习马克思主义理论</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped lang="scss">
.home {
  padding: 2rem 0;

  .title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: $text-color;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #666;
    text-align: center;
    margin-bottom: 3rem;
  }

  .sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .section-card {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    h2 {
      color: $primary-color;
      margin-bottom: 1rem;
    }

    p {
      color: #666;
    }
  }
}
</style> 