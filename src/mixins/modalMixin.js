import Modal from 'bootstrap/js/dist/modal';

export default {
  methods: {
    showModal() {
      // 打開產品表單
      this.modal.show();
    },
    hideModal() {
      // 關閉產品表單
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
