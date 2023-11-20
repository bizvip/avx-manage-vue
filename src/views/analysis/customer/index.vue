<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef"> </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import analysisCustomer from "@/api/analysis/analysisCustomer";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  analysisCustomer
    .changeStatus({
      id,
      statusName,
      statusValue,
    })
    .then((res) => {
      res.success && Message.success(res.message);
      crudRef.value.refresh();
    })
    .catch((e) => {
      console.log(e);
    });
};

const options = reactive({
  id: "n_analysis_customer",
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
  api: analysisCustomer.getList,
  recycleApi: analysisCustomer.getRecycleList,
  add: {
    show: true,
    api: analysisCustomer.save,
    auth: ["analysis:customer:save"],
  },
  edit: {
    show: true,
    api: analysisCustomer.update,
    auth: ["analysis:customer:update"],
  },
  delete: {
    show: true,
    api: analysisCustomer.deletes,
    auth: ["analysis:customer:delete"],
    realApi: analysisCustomer.realDeletes,
    realAuth: ["analysis:customer:realDeletes"],
  },
  recovery: {
    show: true,
    api: analysisCustomer.recoverys,
    auth: ["analysis:customer:recovery"],
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "客户账号",
    dataIndex: "account",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入客户账号",
    },
  },
  {
    title: "站点",
    dataIndex: "site_id",
    formType: "select",
    search: true,
    dict: {
      url: "static/site/dict",
      props: {
        label: "name",
        value: "id",
      },
      translation: true,
    },
    multiple: false,
    hide: false,
    width: 80,
  },
  {
    title: "广告",
    dataIndex: "ad_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入客户账号",
    },
  },
  {
    title: "广告位名字",
    dataIndex: "click_target",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入广告位",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "是否启用",
    dataIndex: "is_enabled",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否启用",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    dict: {
      name: "is_enabled",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "广告开始时间",
    dataIndex: "start_time",
    formType: "date",
    search: true,
    commonRules: {
      required: true,
      message: "请输入广告开始时间",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    showTime: true,
    range: false,
  },
  {
    title: "广告结束时间",
    dataIndex: "end_time",
    formType: "date",
    search: true,
    commonRules: {
      required: true,
      message: "请输入广告结束时间",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    showTime: true,
    range: false,
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
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
]);
</script>
<script>
export default { name: "analysis:customer" };
</script>