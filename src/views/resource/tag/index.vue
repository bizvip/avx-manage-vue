<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceTag from '@/api/resource/resourceTag'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  resourceTag.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'avx_resource_tag',
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
  api: resourceTag.getList,
  recycleApi: resourceTag.getRecycleList,
  add: {
    show: true,
    api: resourceTag.save,
    auth: ['resource:tag:save']
  },
  edit: {
    show: true,
    api: resourceTag.update,
    auth: ['resource:tag:update']
  },
  delete: {
    show: true,
    api: resourceTag.deletes,
    auth: ['resource:tag:delete'],
    realApi: resourceTag.realDeletes,
    realAuth: ['resource:tag:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceTag.recoverys,
    auth: ['resource:tag:recovery']
  },
  import: {
    show: true,
    url: 'resource/tag/import',
    templateUrl: 'resource/tag/downloadTemplate',
    auth: ['resource:tag:import']
  },
  export: {
    show: true,
    url: 'resource/tag/export',
    auth: ['resource:tag:export']
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
    title: "标签名字",
    dataIndex: "cn_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入标签名字"
    }
  },
  {
    title: "标签台湾名字",
    dataIndex: "tw_name",
    formType: "input",
    search: true
  },
  {
    title: "标签英文名字",
    dataIndex: "en_name",
    formType: "input",
    search: true
  },
  {
    title: "标签下包含多少视频",
    dataIndex: "movie_total",
    formType: "input",
    search: true
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "input"
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false
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
<script> export default { name: 'resource:tag' } </script>