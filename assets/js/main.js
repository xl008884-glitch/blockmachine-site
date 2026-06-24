/* =============================================================
   砖机出海多语言站 - 通用交互脚本
   - 汉堡菜单切换
   - 移动端语言切换
   - 询盘表单本地校验
   - 表单提交模拟反馈
   ============================================================= */

(function () {
  'use strict';

  // -------- 移动端菜单 --------
  const toggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      const open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // 点击抽屉中的链接后关闭
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
        document.body.style.overflow = '';
      });
    });
  }

  // -------- 询盘表单提交 --------
  const form = document.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // 简单校验
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(function (input) {
        if (!input.value.trim()) {
          input.style.borderColor = '#dc2626';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (!valid) return;

      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = '...';
      btn.style.opacity = '0.7';

      // 模拟提交：纯静态站，无后端
      setTimeout(function () {
        const success = form.querySelector('.form-success');
        if (success) {
          form.style.display = 'none';
          success.style.display = 'block';
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          btn.textContent = '✓';
          setTimeout(function () {
            btn.disabled = false;
            btn.textContent = orig;
            btn.style.opacity = '';
            form.reset();
          }, 2200);
        }
      }, 600);
    });

    // 输入时清除错误高亮
    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        input.style.borderColor = '';
      });
    });
  }

  // -------- FAQ 折叠 (HTML5 <details> 自带，但增强体验) --------
  document.querySelectorAll('.faq-item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        // 关闭其他项 (手风琴效果)
        document.querySelectorAll('.faq-item').forEach(function (other) {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  // -------- 平滑滚动到锚点 (header sticky 偏移补偿) --------
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    link.addEventListener('click', function (e) {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = (document.querySelector('.site-header')?.offsetHeight || 72) + 16;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // -------- 暴露 API (供扩展) --------
  window.SiteApp = {
    openInquiry: function () {
      const el = document.querySelector('#inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
})();
