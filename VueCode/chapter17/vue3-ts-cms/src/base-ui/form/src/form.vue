<template>
  <div class="hy-form">
    <div class="header"><slot name="header"></slot></div>
    <el-form label-width="labelWidth">
      <el-row>
        <el-col v-bind="colLayout">
          <el-form-item label="用户名">
            <el-input
              :model-value="modelValue.enable"
              placeholder="选择状态"
              @update:modelValue="handleValueChange($event, 'enable')"
            />
          </el-form-item>
        </el-col>
        <el-col v-bind="colLayout">
          <el-form-item label="状态">
            <el-select
              :model-value="modelValue.enable"
              placeholder="选择状态"
              @update:modelValue="handleValueChange($event, 'enable')"
            >
              <el-option label="启动" value="1" />
              <el-option label="禁用" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer"><slot name="footer"></slot></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: any
  labelWidth?: string
  colLayout?: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
  labelWidth: '100px',
  colLayout: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 })
})

const emit = defineEmits<{
  (e: 'update:modelValue', newFormData: any): void
}>()

const handleValueChange = (value: any, field: string) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}

defineExpose({ handleValueChange })
</script>

<style scoped></style>
