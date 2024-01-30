<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceTagGroup from '@/api/resource/resourceTagGroup'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  resourceTagGroup.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'avx_resource_tag_group',
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
  api: resourceTagGroup.getList,
  recycleApi: resourceTagGroup.getRecycleList,
  add: {
    show: true,
    api: resourceTagGroup.save,
    auth: ['resource:tagGroup:save']
  },
  edit: {
    show: true,
    api: resourceTagGroup.update,
    auth: ['resource:tagGroup:update']
  },
  delete: {
    show: true,
    api: resourceTagGroup.deletes,
    auth: ['resource:tagGroup:delete'],
    realApi: resourceTagGroup.realDeletes,
    realAuth: ['resource:tagGroup:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceTagGroup.recoverys,
    auth: ['resource:tagGroup:recovery']
  },
  import: {
    show: true,
    url: 'resource/tagGroup/import',
    templateUrl: 'resource/tagGroup/downloadTemplate',
    auth: ['resource:tagGroup:import']
  },
  export: {
    show: true,
    url: 'resource/tagGroup/export',
    auth: ['resource:tagGroup:export']
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
    title: "分组名字",
    dataIndex: "cn_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入分组名字"
    }
  },
  {
    title: "分组名字（台湾）",
    dataIndex: "tw_name",
    formType: "input",
    search: true
  },
  {
    title: "分组名字（英文）",
    dataIndex: "en_name",
    formType: "input",
    search: true
  },
  {
    title: "包含标签总数",
    dataIndex: "tag_total",
    formType: "input",
    search: true
  },
  {
    title: "推荐指数",
    dataIndex: "rec_idx",
    formType: "input",
    search: true
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true
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
  }
])
</script>
<script> export default { name: 'resource:tagGroup' } </script>