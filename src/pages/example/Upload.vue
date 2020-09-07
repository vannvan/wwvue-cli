<template>
  <div>
    <h1>上传组件</h1>
    <div class="upload-wrap">
      <h2>默认按钮选择</h2>
      <div style="margin-bottom:25px">
        <UploadOperate action="url" />
      </div>

      <h2>自定义图片选择</h2>
      <div>
        <UploadOperate action="url">
          <img
            src="../../assets/image/img.png"
            alt
            slot="action"
            style="width:100px;cursor:pointer"
          />
        </UploadOperate>
      </div>
    </div>
  </div>
</template>

<script>
import UploadOperate from "../../components/UploadOperate";
export default {
  components: {
    UploadOperate
  },
  data() {
    return {
      //
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.upload-wrap {
  margin-top: 15px;
  h2 {
    line-height: 60px;
  }
}
</style>