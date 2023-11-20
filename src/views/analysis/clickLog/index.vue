<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef"></ma-crud>
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import analysisClickLog from "@/api/analysis/analysisClickLog";

const crudRef = ref();

const options = reactive({
  id: "n_analysis_click_log",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: false,
  operationWidth: 160,
  formOption: {
    viewType: "modal",
    width: 600,
  },
  api: analysisClickLog.getList,
  import: {
    show: true,
    url: "analysis/clickLog/import",
    templateUrl: "analysis/clickLog/downloadTemplate",
    auth: ["analysis:clickLog:import"],
  },
  export: {
    show: true,
    url: "analysis/clickLog/export",
    auth: ["analysis:clickLog:export"],
  },
  beforeRequest: (params) => {
    params.orderBy = "id";
    params.orderType = "desc";
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "IPv4",
    dataIndex: "ip",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "访问网址",
    dataIndex: "domain",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "点击目标",
    dataIndex: "click_target",
    formType: "select",
    search: true,
    addDisplay: false,
    editDisplay: false,
    dict: {
      url: "static/banner/dict",
      method: "get",
      props: {
        label: "title",
        value: "id",
      },
      translation: true,
      // cache: true,
    },
  },
  {
    title: "点击时间",
    dataIndex: "click_time",
    formType: "range",
    search: true,
    addDisplay: false,
    editDisplay: false,
    showTime: true,
  },
  {
    title: "浏览器",
    dataIndex: "ua",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "操作系统",
    dataIndex: "os",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "来路（如果有）",
    dataIndex: "from",
    formType: "input",
    search: false,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "广告类型",
    dataIndex: "ad_type",
    formType: "select",
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: false,
    dict: {
      name: "ad-type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "广告单价",
    dataIndex: "ad_price",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
]);
</script>
<script>
export default { name: "analysis:clickLog" };
</script>
