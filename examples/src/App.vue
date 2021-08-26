<template>
  <div class="container">
    <div style="margin-bottom: 8px">
      <el-button @click="onClick" type="primary">主要按钮</el-button>
    </div>
    <div style="margin-bottom: 8px">
      <el-switch></el-switch>
    </div>
    <div style="margin-bottom: 8px">
      <el-avatar
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      ></el-avatar>
    </div>

    <div style="margin-bottom: 8px">
      <el-transfer />
    </div>

    <div style="margin-bottom: 8px">
      <el-select>
        <el-option>
          test
        </el-option>
      </el-select>
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
  ElBreadcrumbItem,
  ElNotification,
  ElSelect,
  ElSelectV2,
  ElRadioButton,
  ElMenuItem,
} from 'element-plus';

export default defineComponent({
  name: 'App',
  components: {
    // NButton,
    // ElAvatar,
    ElButton,
    // ElSwitch,
    ElBreadcrumbItem,
    ElSelect,
    ElSelectV2,
    ElRadioButton,
    // ElMenuItem,
  },
  methods: {
    onClick() {
      ElNotification({ type: 'success', title: '已成功发送邮件', message: '验证码区分大小写，有效期5分钟', duration: 3000 });
    }
  }
});
</script>
