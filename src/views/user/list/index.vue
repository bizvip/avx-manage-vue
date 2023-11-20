<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef"> </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import userList from "@/api/user/userList";
import { Message } from "@arco-design/web-vue";
import tool from "@/utils/tool";
import * as common from "@/utils/common";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  userList
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
  id: "avx_user_list",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 160,
  searchColNumber: 4,
  formOption: {
    viewType: "modal",
    width: 600,
  },
  api: userList.getList,
  recycleApi: userList.getRecycleList,
  add: {
    show: true,
    api: userList.save,
    auth: ["user:list:save"],
  },
  edit: {
    show: true,
    api: userList.update,
    auth: ["user:list:update"],
  },
  delete: {
    show: true,
    api: userList.deletes,
    auth: ["user:list:delete"],
    realApi: userList.realDeletes,
    realAuth: ["user:list:realDeletes"],
  },
  recovery: {
    show: true,
    api: userList.recoverys,
    auth: ["user:list:recovery"],
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
    commonRules: {
      required: true,
      message: "请输入 ID",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "用户名",
    dataIndex: "usr",
    formType: "input",
    search: true,
    addDisplay: true,
    editDisplay: true,
    commonRules: {
      required: true,
      message: "请输入用户名",
    },
  },
  {
    title: "用户密码",
    dataIndex: "pwd",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "提现密码",
    dataIndex: "sec_pwd",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "VIP类型",
    dataIndex: "vip_type",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入VIP类型",
    },
    dict: {
      name: "vip_type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "VIP结束时间",
    dataIndex: "vip_expired_at",
    formType: "date",
    search: true,
  },
  {
    title: "设备码",
    dataIndex: "device_id",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "昵称",
    dataIndex: "nickname",
    formType: "input",
    search: true,
  },
  {
    title: "电子邮件",
    dataIndex: "email",
    formType: "input",
    search: true,
    hide: true,
  },
  {
    title: "头像",
    dataIndex: "avatar",
    formType: "upload",
  },
  {
    title: "手机号",
    dataIndex: "mobile",
    formType: "input-number",
    search: true,
  },
  {
    title: "金币余额",
    dataIndex: "gold",
    formType: "input-number",
    search: true,
  },
  {
    title: "积分",
    dataIndex: "points",
    formType: "input-number",
    search: true,
  },
  {
    title: "渠道码",
    dataIndex: "channel_code",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "来源用户ID",
    dataIndex: "referrer_id",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "推荐码",
    dataIndex: "referral_code",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "累计推广数",
    dataIndex: "referral_count",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "IP地址",
    dataIndex: "ip",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "最后登录",
    dataIndex: "lst_login_time",
    formType: "date",
    search: true,
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "真实姓名",
    dataIndex: "real_name",
    formType: "input",
    search: true,
    hide: true,
  },
  {
    title: "银行卡",
    dataIndex: "bank_card",
    formType: "input",
    search: true,
    hide: true,
  },
  {
    title: "游戏余额",
    dataIndex: "game_balance",
    formType: "input-number",
    search: true,
    addDisplay: false,
  },
  {
    title: "注册时间",
    dataIndex: "register_time",
    formType: "date",
    search: true,
    addDisplay: false,
  },
  {
    title: "是否启用",
    dataIndex: "is_enabled",
    formType: "switch",
    search: true,
  },
  {
    title: "备注",
    dataIndex: "remark",
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
    commonRules: {
      required: true,
      message: "请输入创建时间",
    },
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入更新时间",
    },
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
export default { name: "user:list" };
</script>
