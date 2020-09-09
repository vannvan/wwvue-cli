<template>
  <div>
    <h1>上传组件</h1>
    <Alert show-icon>
      简要说明
      <Icon type="ios-bulb-outline" slot="icon"></Icon>
      <template slot="desc">
        <pre>
    1. 此组件相较于iview上传组件较为轻量，可在项目内根据实际需要对组件进行任意扩展，定制化需求开发成本较低
    2.一般上传的两种步骤： <small v-warn>step默认为1</small>
        a.按钮点击直接上传，除file之外参数可选，
        b.选择后可重新选择，需手动触发上传操作，也就是调取上传接口，除file之外参数可选，
    3.上传完毕只有无论成功失败均为finish，可根据业务需求在页面内进行不同的处理，避免过多繁杂的方法
    </pre>
      </template>
    </Alert>
    <div class="upload-wrap">
      <h2>默认按钮选择(一步)</h2>
      <div style="margin-bottom:25px">
        <UploadOperate
          action="/api/uploadFile"
          @on-change="handleChange"
          @on-finish="handleFinish"
          accept="img"
          upload-text="导入"
          :step="1"
        />
      </div>

      <h2>自定义图片选择(一步)</h2>
      <div>
        <UploadOperate action="/api/uploadFile" @on-change="handleChange" :step="1">
          <div
            style="padding: 20px 60px;cursor:pointer;border-radius:5px;border:1px solid #ccc;text-align:center"
            slot="action"
          >
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>可以自定义点击区域触发选择文件操作</p>
          </div>
        </UploadOperate>
      </div>

      <h2>自定义图片选择(两步)</h2>
      <div>
        <UploadOperate action="/api/uploadFile" @on-change="handleChange" :step="2" ref="upload">
          <img :src="imgUrl" slot="action" style="width:100px;cursor:pointer" />
        </UploadOperate>
        <Button type="primary" @click="handleConfirm()">确认上传</Button>
      </div>
    </div>
  </div>
</template>

<script>
import UploadOperate from "../../components/UploadOperate";
import { image2Base64 } from "../../utils";
export default {
  components: {
    UploadOperate
  },
  data() {
    return {
      imgUrl: require("../../assets/image/img.png")
    };
  },

  methods: {
    handleChange(fileInfo) {
      console.log("fileInfo:", fileInfo);
      image2Base64(fileInfo, res => {
        this.imgUrl = res;
      });
    },

    handleFinish(response) {
      console.log(response);
    },

    //确认上传
    handleConfirm() {
      this.$refs.upload.upload({ type: 1 });
    }
  }
};
</script>

<style lang="scss">
.upload-wrap {
  margin-top: 15px;
}
</style>