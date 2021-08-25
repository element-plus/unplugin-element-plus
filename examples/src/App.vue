<template>
  <div class="container">
    <div style="margin-bottom: 8px;">
      <el-button type="primary">主要按钮</el-button>
    </div>
    <div style="margin-bottom: 8px;">
      <el-switch></el-switch>
    </div>
    <div style="margin-bottom: 8px;">
      <el-avatar
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      ></el-avatar>
    </div>

    <div>
      <el-transfer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { NButton } from 'naive-ui'
import {
  ElButton,
  ElSwitch,
  ElAvatar,
} from 'element-plus';

export default defineComponent({
  name: 'App',
  components: {
    // NButton,
    ElAvatar,
    ElButton,
    ElSwitch,
  },
});
</script>
