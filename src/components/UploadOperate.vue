<template>
  <div class="ww-upload-operate">
    <Button
      @click="handleChooseFile"
      icon="ios-cloud-upload-outline"
      type="primary"
      v-if="!$slots.action"
    >{{uploadText}}</Button>
    <!-- 如果没有传入slot.action就默认只是用按钮 -->
    <div @click="handleChooseFile">
      <slot name="action"></slot>
    </div>
    <input ref="filElem" type="file" class="upload-file" @change="getFile" />
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: "",
      required: true
    },
    uploadParams: {
      type: Object,
      default: () => {
        return {};
      }
    },
    uploadText: {
      type: String,
      default: "上传"
    }
  },

  methods: {
    //选择文件
    handleChooseFile() {
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
    },
    getFile() {
      const inputFile = this.$refs.filElem.files[0];
      console.log(inputFile);
    },
    logout() {
      console.log("load");
    }
  }
};
</script>

<style lang="scss">
.#{$prefix}upload-operate {
  input[type="file"] {
    display: none;
  }
}
</style>