<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceVideo from '@/api/resource/resourceVideo'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  resourceVideo.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'ffs_resource_video',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 1000
  },
  api: resourceVideo.getList,
  recycleApi: resourceVideo.getRecycleList,
  add: {
    show: true,
    api: resourceVideo.save,
    auth: ['resource:video:save']
  },
  edit: {
    show: true,
    api: resourceVideo.update,
    auth: ['resource:video:update']
  },
  delete: {
    show: true,
    api: resourceVideo.deletes,
    auth: ['resource:video:delete'],
    realApi: resourceVideo.realDeletes,
    realAuth: ['resource:video:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceVideo.recoverys,
    auth: ['resource:video:recovery']
  },
  import: {
    show: true,
    url: 'resource/video/import',
    templateUrl: 'resource/video/downloadTemplate',
    auth: ['resource:video:import']
  },
  export: {
    show: true,
    url: 'resource/video/export',
    auth: ['resource:video:export']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: false,
    commonRules: {
      required: true,
      message: "请输入ID"
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    }
  },
  {
    title: "番号",
    dataIndex: "code",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入番号"
    }
  },
  {
    title: "预览图的名字们",
    dataIndex: "previews",
    formType: "input"
  },
  {
    title: "海报封面",
    dataIndex: "poster",
    formType: "input"
  },
  {
    title: "封面展示缩略图",
    dataIndex: "thumb",
    formType: "input"
  },
  {
    title: "出版日期",
    dataIndex: "release_date",
    formType: "date",
    search: true
  },
  {
    title: "视频时长 (秒,0代表未知)",
    dataIndex: "duration",
    formType: "input"
  },
  {
    title: "片名",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入片名"
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    }
  },
  {
    title: "导演",
    dataIndex: "director",
    formType: "input",
    search: true
  },
  {
    title: "制作商",
    dataIndex: "maker",
    formType: "input",
    search: true
  },
  {
    title: "发行商",
    dataIndex: "label",
    formType: "input",
    search: true
  },
  {
    title: "中文片名",
    dataIndex: "cn_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入中文片名"
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    }
  },
  {
    title: "繁体中文名",
    dataIndex: "tw_name",
    formType: "input",
    search: true,
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
    title: "英文片名",
    dataIndex: "en_name",
    formType: "input",
    search: true,
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
    title: "影片简介",
    dataIndex: "desc",
    formType: "textarea",
    hide: true
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "textarea",
    hide: true
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
<script> export default { name: 'resource:video' } </script>