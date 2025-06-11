<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright">© {{ new Date().getFullYear() }} 个人学习网站. All rights reserved.</p>
      <div class="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link">
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped lang="scss">
.footer {
  background-color: #f5f5f5;
  padding: 2rem;
  margin-top: 4rem;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    color: #666;
    font-size: 0.9rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}
</style> 