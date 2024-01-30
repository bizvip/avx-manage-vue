<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceActor from '@/api/resource/resourceActor'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  resourceActor.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch(e => { console.log(e) })
}

const options = reactive({
  id: 'avx_resource_actor',
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
  api: resourceActor.getList,
  recycleApi: resourceActor.getRecycleList,
  add: {
    show: true,
    api: resourceActor.save,
    auth: ['resource:actor:save']
  },
  edit: {
    show: true,
    api: resourceActor.update,
    auth: ['resource:actor:update']
  },
  delete: {
    show: true,
    api: resourceActor.deletes,
    auth: ['resource:actor:delete'],
    realApi: resourceActor.realDeletes,
    realAuth: ['resource:actor:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceActor.recoverys,
    auth: ['resource:actor:recovery']
  },
  import: {
    show: true,
    url: 'resource/actor/import',
    templateUrl: 'resource/actor/downloadTemplate',
    auth: ['resource:actor:import']
  },
  export: {
    show: true,
    url: 'resource/actor/export',
    auth: ['resource:actor:export']
  },
  beforeRequest: (params) => {
    params.orderBy = 'id'
    params.orderType = 'desc'
  }
})

const columns = reactive([
  {
    title: 'ID',
    dataIndex: 'id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    }
  },
  {
    title: '头像',
    dataIndex: 'head_img',
    formType: 'input'
  },
  {
    title: '国籍',
    dataIndex: 'nationality',
    formType: 'select',
    search: true,
    dict: {
      name: 'nationality',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '中文名',
    dataIndex: 'cn_name',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: "请输入简体中文名"
    },
  },
  {
    title: '繁体中文',
    dataIndex: 'tw_name',
    formType: 'input',
    search: true
  },
  {
    title: '日文名',
    dataIndex: 'jp_name',
    formType: 'input',
    search: true
  },
  {
    title: '英文名',
    dataIndex: 'en_name',
    formType: 'input',
    search: true
  },
  {
    title: '别名',
    dataIndex: 'alias_name',
    formType: 'input',
    search: true
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    formType: 'date',
    search: true
  },
  {
    title: '身高',
    dataIndex: 'height',
    formType: 'input-number',
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    }
  },
  {
    title: '罩杯',
    dataIndex: 'cup',
    formType: 'select',
    search: true,
    dict: {
      name: 'cup',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '出生地',
    dataIndex: 'birthplace',
    formType: 'input',
    hide: true
  },
  {
    title: '出道日期',
    dataIndex: 'debut_date',
    formType: 'date',
    hide: true
  },
  {
    title: '封面海报',
    dataIndex: 'poster_img',
    formType: 'input'
  },
  {
    title: '三围(胸|腰|臀)厘米',
    dataIndex: 'body_meas',
    formType: 'input'
  },
  {
    title: '片商',
    dataIndex: 'distributor',
    formType: 'input',
    hide: true
  },
  {
    title: '爱好',
    dataIndex: 'hobbies',
    formType: 'input',
    hide: true
  },
  {
    title: '简介',
    dataIndex: 'summary',
    formType: 'input',
    hide: true
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '删除时间',
    dataIndex: 'deleted_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '创建者',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '更新者',
    dataIndex: 'updated_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'resource:actor' } </script>