<template>
  <div class="ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2">
    <!-- CRUD 组件 -->
    <ma-crud :options="crud" :columns="columns" ref="crudRef"> </ma-crud>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import loginLog from "@/api/system/loginLog";

const crudRef = ref();

const crud = reactive({
  api: loginLog.getPageList,
  showIndex: false,
  pageLayout: "fixed",
  rowSelection: false,
  requestParams: {
    orderBy: "login_time",
    orderType: "desc",
  },
  delete: {
    show: true,
    api: loginLog.deletes,
    auth: ["system:loginLog:delete"],
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    addDisplay: false,
    editDisplay: false,
    width: 75,
    hide: false,
  },
  {
    title: "登录用户",
    dataIndex: "username",
    search: true,
    width: 150,
  },
  {
    title: "登录状态",
    dataIndex: "status",
    search: true,
    width: 120,
    formType: "select",
    dict: {
      data: [
        {
          label: "成功",
          value: 1,
        },
        {
          label: "失败",
          value: 2,
        },
      ],
      translation: true,
    },
  },
  {
    title: "登录IP",
    dataIndex: "ip",
    width: 150,
    search: true,
  },
  {
    title: "登录地点",
    dataIndex: "ip_location",
    width: 150,
  },
  {
    title: "操作系统",
    dataIndex: "os",
    width: 150,
  },
  {
    title: "浏览器",
    dataIndex: "browser",
    width: 150,
  },
  {
    title: "登录信息",
    dataIndex: "message",
    width: 180,
  },
  {
    title: "登录时间",
    dataIndex: "login_time",
    width: 180,
    search: true,
    formType: "range",
  },
]);
</script>

<script>
export default { name: "system:loginLog" };
</script>

<style scoped></style>