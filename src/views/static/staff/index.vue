<template>
  <div>
    <a-alert>本页面每隔15秒，自动刷新一次</a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #is_enabled="{ record }">
          <a-switch
            :default-checked="parseInt(record.is_enabled) === 1"
            checked-color="success"
            unchecked-color="warning"
            checked-text="自动换"
            unchecked-text="非自动"
            checked-value="1"
            unchecked-value="0"
            @change="updateValue($event, record.id, 'is_enabled')"
          />
        </template>

        <template #operationBeforeExtend="{ record }">
          <a-link @click="changeDomain(record.id)">点击换域名</a-link>
          <a-link @click="copyMessage(record.id)">重发通知</a-link>
        </template>
      </ma-crud>
    </div>
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import staticStaff from "@/api/static/staticStaff";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const copyMessage = (id) => {
  staticStaff
    .copyMessage({ id })
    .then((res) => {
      res.success && Message.success(res.message);
    })
    .catch((e) => {
      Message.error(e.message);
      console.log(e);
    });
};

const changeDomain = (id) => {
  staticStaff
    .changeDomain({ id })
    .then((res) => {
      res.success && Message.success(res.message);
    })
    .catch((e) => {
      Message.error(e.message);
      console.log(e);
    });
};
const updateValue = (value, id, name) => {
  staticStaff
    .changeStatus({
      id,
      name,
      value,
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
  pageSize: 20,
  pageSizeOption: [20, 100],
  searchColNumber: 4,
  id: "n_static_staff",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 200,
  operationColumnWidth: 200,
  formOption: {
    viewType: "modal",
    width: 770,
    isFull: true,
  },
  api: staticStaff.getList,
  recycleApi: staticStaff.getRecycleList,
  add: {
    show: true,
    api: staticStaff.save,
    auth: ["static:staff:save"],
  },
  edit: {
    show: true,
    api: staticStaff.update,
    auth: ["static:staff:update"],
  },
  delete: {
    show: true,
    api: staticStaff.deletes,
    auth: ["static:staff:delete"],
    realApi: staticStaff.realDeletes,
    realAuth: ["static:staff:realDeletes"],
  },
  recovery: {
    show: true,
    api: staticStaff.recoverys,
    auth: ["static:staff:recovery"],
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
    hide: false,
    width: 100,
  },
  {
    title: "运营名字",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入运营名字",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    width: 120,
  },
  {
    title: "统计CK/ID",
    dataIndex: "analysis_id",
    formType: "input",
    search: true,
    commonRules: {
      required: false,
      message: "",
    },
    width: 120,
  },
  {
    title: "负责站点",
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
    display: true,
    width: 100,
  },
  {
    title: "统计接口",
    dataIndex: "analysis_data",
    formType: "code-editor",
    isBind: false,
    search: false,
    readonly: false,
    disabled: false,
    commonRules: {
      required: false,
      message: "",
    },
    width: 50,
    hide: true,
  },
  {
    title: "首发域名",
    dataIndex: "first_domain",
    formType: "input",
    search: false,
    commonRules: {
      required: false,
      match: /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
      message:
        "首发域名即第一个给予该运营人员开渠道统计的域名，也就是在51la等统计站上开的第一个域名",
    },
  },
  {
    title: "最新域名(以状态为准)",
    dataIndex: "last_domain",
    formType: "input",
    search: false,
    commonRules: {
      required: false,
      match: /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
      message: "最后一次更换的域名(当前最新域名)",
    },
    width: 140,
  },
  {
    title: "最新域名状态",
    dataIndex: "status",
    formType: "radio",
    search: true,
    dict: {
      name: "staff_status",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    multiple: false,
    hide: false,
    display: true,
    readonly: true,
    disabled: true,
    addDefaultValue: 0,
    width: 120,
  },
  {
    title: "统计类型",
    dataIndex: "stat_type",
    formType: "radio",
    search: true,
    dict: {
      data: [
        {
          label: "51LA",
          value: "1",
        },
        {
          label: "Baidu统计",
          value: "2",
        },
        {
          label: "Google统计",
          value: "3",
        },
      ],
      translation: true,
    },
    addDefaultValue: 1,
  },
  {
    title: "是否自动换",
    dataIndex: "is_enabled",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请选择是否启用",
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
    addDefaultValue: 1,
  },
  {
    title: "最后更换时间",
    dataIndex: "last_switch_time",
    formType: "date",
    display: true,
    disabled: true,
    readonly: true,
    hide: false,
    showTime: true,
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

//定时刷新开始
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    console.log("定时刷新呀");
    crudRef.value.refresh();
  }, 15000);
});
onBeforeUnmount(() => {
  clearInterval(timer); // 清除定时器，防止内存泄漏
});
// 定时刷新结束
</script>
<script>
export default { name: "static:staff" };
</script>
