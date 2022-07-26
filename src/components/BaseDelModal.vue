<template>
  <div class="modal fade" id="delModal" tabindex="-1"
  ref="modal">
    <div class="modal-dialog modal-xl modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">刪除 {{ item.title }}</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{ item.title }}</strong><strong>[刪除後將無法復原]</strong>。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-muted" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger"
          @click.prevent="$emit('del-item')">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      modal: {},
    };
  },
  mixins: [modalMixin],
};
</script>
