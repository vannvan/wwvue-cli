<template>
  <div class="user-info-wrap">
    <el-card :body-style="{ padding: '0px' }" v-loading="loading">
      <div class="main-info" v-if="!loading">
        <img :src="vannvanInfo.avatar_url" class="image" />
        <div class="main-info-detail">
          <h1>
            {{ vannvanInfo.login }}
          </h1>
          <p>
            <b>
              {{ vannvanInfo.bio }}
            </b>
          </p>
          <div class="desc-content">
            <div class="desc-item">
              <p>Respositories</p>
              <p>{{ vannvanInfo.public_repos }}</p>
            </div>
            <div class="desc-item">
              <p>Following</p>
              <p>
                {{ vannvanInfo.following }}
              </p>
            </div>
            <div class="desc-item">
              <p>Followers</p>
              <p>
                {{ vannvanInfo.followers }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style="padding: 14px" v-if="!loading">
        <p v-for="(val, key) in vannvanInfo" :key="key" class="info-item">
          <span class="info-label"> {{ key }} </span>
          <span class="info-value">{{ vannvanInfo[key] }}</span>
        </p>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  setup() {
    const vannvanInfo: Ref = ref(null)
    const loading = ref(false)

    const getVannvanInfo = () => {
      loading.value = true
      axios.get('/users/vannvan').then((res) => {
        loading.value = false
        vannvanInfo.value = res.data
      })
    }
    onMounted(() => {
      console.log('onMounted')
    })
    getVannvanInfo()
    return {
      vannvanInfo,
      getVannvanInfo,
      loading
    }
  }
})
</script>
<style lang="scss">
.user-info-wrap {
  .main-info {
    height: 300px;
    display: flex;
    .image {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin: 50px;
    }
    .main-info-detail {
      width: 400px;
      .desc-content {
        display: flex;
        justify-content: flex-start;
        .desc-item {
          width: 30%;
          text-align: center;
        }
      }
    }
  }

  .info-item {
    display: flex;
    border-bottom: 1px solid #ededed;
    line-height: 40px;
    justify-content: flex-start;
    .info-label {
      width: 200px;
      font-weight: 600;
      &::after {
        content: ' : ';
      }
    }
  }
}
</style>
