<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden; text-align: initial"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // import css

import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

// editor instance, use `shallowRef`
const editorRef = shallowRef()
const mode = ref('default')

// content HTML
const valueHtml = ref('<p></p>')

const toolbarConfig: Partial<IToolbarConfig> = {
  excludeKeys: ['fullScreen']
}
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '在此输入...',
  MENU_CONF: {
    uploadImage: {
      base64LimitSize: 5 * 1024 * 1024
    }
  }
}

// Timely destroy `editor` before vue component destroy.
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // record editor instance
}

defineExpose({
  editor: editorRef
})
</script>
