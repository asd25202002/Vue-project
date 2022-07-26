import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  methods: {
    showOffcanvas() {
      // 行動裝置閱覽導覽列開啟
      this.offcanvas.show();
    },
    hideOffcanvas() {
      // 行動裝置閱覽導覽列關閉
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.menu);
  },
};
