<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #src="{ record }">
        <a-image
          width="80"
          height="50"
          fit="fit"
          :alt="record.file_name"
          :src="record.src"
        />
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import pictureList from "@/api/picture/pictureList";
import { Message } from "@arco-design/web-vue";
import tool from "@/utils/tool";
import * as common from "@/utils/common";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  pictureList
    .changeStatus({ id, statusName, statusValue })
    .then((res) => {
      res.success && Message.success(res.message);
      crudRef.value.refresh();
    })
    .catch((e) => {
      console.log(e);
    });
};

const options = reactive({
  id: "avx_picture_list",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 100,
  formOption: {
    viewType: "modal",
    width: 800,
  },
  api: pictureList.getList,
  recycleApi: pictureList.getRecycleList,
  add: {
    show: true,
    api: pictureList.save,
    auth: ["picture:list:save"],
  },
  edit: {
    show: true,
    api: pictureList.update,
    auth: ["picture:list:update"],
  },
  delete: {
    show: true,
    api: pictureList.deletes,
    auth: ["picture:list:delete"],
    realApi: pictureList.realDeletes,
    realAuth: ["picture:list:realDeletes"],
  },
  recovery: {
    show: true,
    api: pictureList.recoverys,
    auth: ["picture:list:recovery"],
  },
  import: {
    show: true,
    url: "picture/list/import",
    templateUrl: "picture/list/downloadTemplate",
    auth: ["picture:list:import"],
  },
  export: {
    show: true,
    url: "picture/list/export",
    auth: ["picture:list:export"],
  },
  beforeRequest: (params) => {
    params.orderBy = "id";
    params.orderType = "desc";
  },
  beforeAdd: (formData) => {},
  beforeEdit: (formData) => {},
  beforeDelete: () => {
    return true;
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input-number",
    search: true,
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "所属相册ID",
    dataIndex: "album_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入所属相册ID",
    },
  },
  {
    title: "完整存储地址",
    dataIndex: "src",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入完整存储地址",
    },
  },
  {
    title: "文件名",
    dataIndex: "file_name",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入文件名",
    },
  },
  {
    title: "文件编码格式",
    dataIndex: "format",
    formType: "select",
    search: true,
    dict: {
      name: "file_format",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "文件校验码",
    dataIndex: "hash",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "宽度像素",
    dataIndex: "width",
    formType: "input",
    search: true,
  },
  {
    title: "高度像素",
    dataIndex: "height",
    formType: "input",
    search: true,
  },
  {
    title: "文件大小（字节）",
    dataIndex: "file_size",
    formType: "input",
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input",
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "更新者",
    dataIndex: "updated_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
]);
</script>
<script>
export default { name: "picture:list" };
</script>
