import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'ai',
        name: 'AI',
        component: () => import('@/pages/AI.vue'),
        meta: {
          title: 'AI学习'
        }
      },
      {
        path: 'marxism',
        name: 'Marxism',
        component: () => import('@/pages/Marxism.vue'),
        meta: {
          title: '马克思主义'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
        meta: {
          title: '关于我'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: '页面未找到'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title} - 个人学习网站`
  next()
})

export default router 