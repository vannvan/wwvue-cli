<template>
  <div class="ww-upload-operate">
    <Button
      @click="handleChooseFile"
      icon="ios-cloud-upload-outline"
      type="primary"
      v-if="!$slots.action"
    >{{uploadText}}</Button>
    <!-- 如果没有传入slot.action就默认只是用按钮 -->
    <span @click="handleChooseFile" class="upload-action">
      <slot name="action"></slot>
    </span>
    <input ref="filElem" type="file" class="upload-file" :accept="accept" @change="getFile" />
  </div>
</template>

<script>
const { uploadFile } = require("@/api").Common;
import { fileExtension, isType } from "../utils";
//示例，此方法不太严禁，如果有较高要求可严格按照html标准对accept进行限制
const ACCEPT_OPTS = {
  img: ["png", "jpg"],
  excel: ["xlsx", "xls"],
  zip: ["zip"]
};
export default {
  props: {
    //文件上传地址
    action: {
      type: String,
      default: "",
      required: true
    },
    //文件上传附加参数
    uploadParams: {
      type: Object,
      default: () => {
        return {};
      }
    },
    uploadText: {
      type: String,
      default: "上传"
    },
    viewType: {
      type: String,
      default: "button"
    },
    // 上传步骤，分两种场景：
    // 1. 按钮上传无需确认直接走接口，
    // 2. 选择文件后可重新选择且有手动确认步骤
    step: {
      type: Number,
      default: 1,
      validator: function(value) {
        return [1, 2].indexOf(value) !== -1;
      }
    },
    // 接受的文件类型
    accept: {
      type: [String, Array],
      default: null
    },
    //上传的文件字段名
    fileName: {
      type: String,
      default: "file"
    },
    //文件大小
    maxSize: {
      type: Number,
      default: 1024
    }
  },
  data() {
    return {
      inputFile: null
    };
  },

  methods: {
    upload(params) {
      this.handleUploadFile(params);
    },

    handleChooseFile() {
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
    },

    getFile() {
      this.inputFile = this.$refs.filElem.files[0];
      this.$refs.filElem.value = null;
      this.$emit("on-change", this.inputFile);
      if (!this.handleValidation(this.inputFile)) {
        return false;
      }
      if (this.step == 1) {
        this.handleUploadFile();
      }
    },

    handleUploadFile(uploadParams = {}) {
      if (!isType(uploadParams, "object")) {
        console.error("uploadParams参数格式错误");
        return;
      }
      let params = Object.assign(
        {
          [this.fileName]: this.inputFile
        },
        uploadParams
      );
      uploadFile(this.action, params).then(res => {
        this.$emit("on-finish", res);
        this.inputFile = null;
      });
    },

    handleValidation(file) {
      let fileExt = fileExtension(file.name);
      //验证类型
      if (this.accept && !ACCEPT_OPTS[this.accept].includes(fileExt)) {
        this.$Message.error(
          `请选择${ACCEPT_OPTS[this.accept].join()}格式的文件`
        );
        return false;
      }
      //验证大小
      if (this.maxSize && file.size / 1024 > this.maxSize) {
        this.$Message.error(`请选择小于${this.maxSize / 1024}M的文件`);
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss">
.#{$prefix}upload-operate {
  input[type="file"] {
    display: none;
  }
  .upload-action {
    display: inline-block;
  }
}
</style>