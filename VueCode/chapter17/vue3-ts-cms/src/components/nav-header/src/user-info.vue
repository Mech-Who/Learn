<template>
  <div class="user-info">
    <el-dropdown>
      <span>
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726flepng.png"
        ></el-avatar>
        <span class="username">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="circle-close">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { IStoreType } from '@/store/types'
const store = useStore<IStoreType>()
const name = computed(() => store.state.login.userInfo.name)
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.username {
  margin-left: 8px;
}
</style>
