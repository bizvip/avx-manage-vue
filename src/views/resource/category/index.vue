<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceCategory from '@/api/resource/resourceCategory'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  resourceCategory.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'avx_resource_category',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: resourceCategory.getList,
  recycleApi: resourceCategory.getRecycleList,
  add: {
    show: true,
    api: resourceCategory.save,
    auth: ['resource:category:save']
  },
  edit: {
    show: true,
    api: resourceCategory.update,
    auth: ['resource:category:update']
  },
  delete: {
    show: true,
    api: resourceCategory.deletes,
    auth: ['resource:category:delete'],
    realApi: resourceCategory.realDeletes,
    realAuth: ['resource:category:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceCategory.recoverys,
    auth: ['resource:category:recovery']
  },
  import: {
    show: true,
    url: 'resource/category/import',
    templateUrl: 'resource/category/downloadTemplate',
    auth: ['resource:category:import']
  },
  export: {
    show: true,
    url: 'resource/category/export',
    auth: ['resource:category:export']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    }
  },
  {
    title: "分类名字",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入分类名字"
    }
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "更新者",
    dataIndex: "updated_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'resource:category' } </script>