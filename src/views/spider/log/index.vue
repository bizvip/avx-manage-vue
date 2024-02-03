<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #screenshot="{ record }">
        <a-image
          width="192"
          height="108"
          fit="contain"
          :alt="record.title"
          :src="`/runtime/${record.site_name}/screenshots/${record.screenshot}`"
        />
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import spiderLog from "@/api/spider/spiderLog";

const crudRef = ref();

const options = reactive({
  id: "avx_spider_log",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: "modal",
    width: 600,
  },
  api: spiderLog.getList,
  recycleApi: spiderLog.getRecycleList,
  delete: {
    show: true,
    api: spiderLog.deletes,
    auth: ["spider:log:delete"],
    realApi: spiderLog.realDeletes,
    realAuth: ["spider:log:realDeletes"],
  },
  recovery: {
    show: true,
    api: spiderLog.recoverys,
    auth: ["spider:log:recovery"],
  },
  import: {
    show: true,
    url: "spider/log/import",
    templateUrl: "spider/log/downloadTemplate",
    auth: ["spider:log:import"],
  },
  export: {
    show: true,
    url: "spider/log/export",
    auth: ["spider:log:export"],
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
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "站点名字",
    dataIndex: "site_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "目标链接",
    dataIndex: "url",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    width: 200,
  },
  {
    title: "目标hash",
    dataIndex: "hash",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    width: 180,
  },
  {
    title: "爬虫访问页截图",
    dataIndex: "screenshot",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "是否重复",
    dataIndex: "is_repeat",
    formType: "radio",
    search: true,
    addDisplay: false,
    editDisplay: false,
    dict: {
      name: "yes_no",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    width: 60,
  },
  {
    title: "是否成功",
    dataIndex: "is_success",
    formType: "radio",
    search: true,
    addDisplay: false,
    editDisplay: false,
    width: 60,
    dict: {
      name: "yes_no",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "重复访问次数",
    dataIndex: "replay_count",
    formType: "slider",
    search: true,
    addDisplay: false,
    editDisplay: false,
    width: 80,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
]);
</script>
<script>
export default { name: "spider:log" };
</script>
