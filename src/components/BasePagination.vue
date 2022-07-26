<template>
  <div class="row">
    <nav aria-label="分頁列">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'disabled': pages.has_pre === false }">
          <a class="page-link link-dark" href="#" aria-label="上一頁">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" :class="{ 'active': page === pages.current_page }"
        v-for="page in pages.total_pages" :key="page">
          <a class="page-link" href="#" @click.prevent="updatePage(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item" :class="{ 'disabled': pages.has_next === false }">
          <a class="page-link link-dark" href="#" aria-label="下一頁">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
  },
};
</script>
