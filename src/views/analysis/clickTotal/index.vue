<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef"> </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import analysisClickTotal from "@/api/analysis/analysisClickTotal";

const crudRef = ref();

const options = reactive({
  id: "n_analysis_click_total",
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
  api: analysisClickTotal.getList,
  import: {
    show: true,
    url: "analysis/clickTotal/import",
    templateUrl: "analysis/clickTotal/downloadTemplate",
    auth: ["analysis:clickTotal:import"],
  },
  export: {
    show: true,
    url: "analysis/clickTotal/export",
    auth: ["analysis:clickTotal:export"],
  },
});

const columns = reactive([
  {
    title: "",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "客户账号",
    dataIndex: "account",
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
    title: "统计开始时间",
    dataIndex: "start_time",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    showTime: true,
    range: false,
  },
  {
    title: "统计结束时间",
    dataIndex: "end_time",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    showTime: true,
    range: false,
  },
  {
    title: "广告目标",
    dataIndex: "click_target",
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
    title: "点击总数",
    dataIndex: "click_count",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "广告总价",
    dataIndex: "ad_total_amount",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "IP统计",
    dataIndex: "ip_count",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "UV统计",
    dataIndex: "uv_count",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
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
export default { name: "analysis:clickTotal" };
</script>