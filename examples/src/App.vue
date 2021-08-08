<template>
  <div class="container">
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElAffix, ElAvatar } from '@element-plus/components'
import { ElButton } from '@element-plus/components'

export default defineComponent({
  name: 'App',
  components: {
    ElButton,
    ElAffix,
    ElAvatar
  }
})
</script>
