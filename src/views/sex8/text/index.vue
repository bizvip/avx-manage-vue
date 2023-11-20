<template>
  <div>
    <a-alert type="info" :show-icon="false">
      <a-space>
        <a-typography-text bold underline>👩杏吧导航</a-typography-text>
        >
        <a-typography-text bold underline>文本管理</a-typography-text>
        <icon-notification />
        <a-typography-text>
          排序 ：文本排序只有在启用滚动公告等功能时候才有用
        </a-typography-text>
        <icon-notification />
        <a-typography-text>
          <b
            >更新：同一个运营同一个站点，相同类型的内容，如果前端不支持多条展示，将不再允许重复添加</b
          >
        </a-typography-text>
        <icon-notification />
        <a-typography-text
          >不同域名展示相同类型的内容可以不一样
        </a-typography-text>
      </a-space>
    </a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #is_enabled="{ record }">
          <a-switch
            :default-checked="parseInt(record.is_enabled) === 1"
            checked-text="开"
            unchecked-text="关"
            checked-value="1"
            unchecked-value="0"
            @change="updateValue($event, record.id, 'is_enabled')"
          />
        </template>
      </ma-crud>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import staticText from "@/api/static/staticText";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const SITE_ID = import.meta.env.VITE_APP_SEX8_ID;

const updateValue = (value, id, name) => {
  staticText
    .changeStatus({
      id,
      name,
      value,
      SITE_ID,
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
  expandSearch: false,
  id: "n_sex8_text",
  rowSelection: { showCheckedAll: true },
  pk: "id",
  operationColumn: true,
  operationWidth: 100,
  operationColumnWidth: 100,
  formOption: {
    viewType: "modal",
    width: 900,
  },
  api: staticText.getList,
  recycleApi: staticText.getRecycleList,
  add: {
    show: true,
    api: staticText.save,
    auth: ["sex8:text:save"],
  },
  edit: {
    show: true,
    api: staticText.update,
    auth: ["sex8:text:update"],
  },
  delete: {
    show: true,
    api: staticText.deletes,
    auth: ["sex8:text:delete"],
    realApi: staticText.realDeletes,
    realAuth: ["sex8:text:realDeletes"],
  },
  recovery: {
    show: true,
    api: staticText.recoverys,
    auth: ["sex8:text:recovery"],
  },
  beforeRequest: (params) => {
    params.orderBy = "id";
    params.orderType = "desc";
    params.site_id = SITE_ID;
  },
  beforeAdd: (formData) => {
    formData.site_id = SITE_ID;
  },
  beforeEdit: (formData) => {
    formData.site_id = SITE_ID;
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
  },
  {
    title: "所属运营",
    dataIndex: "staff_name",
    formType: "select",
    search: false,
    dict: {
      url: "static/staff/index",
      method: "get",
      props: {
        label: "name",
        value: "name",
      },
      translation: false,
      openPage: true,
      pageSize: 50,
    },
    multiple: false,
    hide: false,
    addDisplay: true,
    editDisplay: true,
    addDisabled: false,
    editDisabled: true,
    width: 90,
  },
  {
    title: "站点",
    dataIndex: "site_id",
    formType: "select",
    search: false,
    dict: {
      url: "static/site/dict",
      props: {
        label: "name",
        value: "id",
      },
      translation: true,
    },
    multiple: false,
    hide: true,
    addDisplay: false,
    editDisplay: false,
    addDefaultValue: SITE_ID,
    editDefaultValue: SITE_ID,
    disabled: true,
    width: 80,
  },
  {
    title: "类型",
    dataIndex: "type",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请选择 文本 类型",
    },
    multiple: false,
    dict: {
      name: "site_text_type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    extra:
      "站点名字只能纯文本；所有的统计类代码OpenInstall等，请使用{;}按钮，选择Javascript，插入代码的方式添加",
  },
  {
    title: "所属域名",
    dataIndex: "domain_id",
    formType: "select",
    search: true,
    commonRules: {
      required: false,
      message: "请选择 所属域名 (需要先添加可选择的域名到域名管理里面)",
    },
    multiple: true,
    dict: {
      url: "static/domain/dict?is_enabled=1&site_id=" + SITE_ID,
      props: {
        label: "domain",
        value: "id",
      },
      translation: true,
    },
    extra:
      "不选则为*全部生效。选择则只会在对应域名访问的时候生效。可多选可单选",
    addDefaultValue: [],
    width: 200,
  },
  {
    title: "内容",
    dataIndex: "content",
    formType: "editor",
    commonRules: {
      required: true,
      message: "请输入内容",
    },
    height: 300,
    width: 200,
  },
  {
    title: "图片",
    dataIndex: "img_src",
    formType: "upload",
    multiple: false,
    onlyData: false,
    onlyUrl: false,
    chunk: false,
    type: "image",
    hide: true,
    display: false,
  },
  {
    title: "开始时间",
    dataIndex: "begin_time",
    formType: "date",
    search: true,
    showTime: true,
    range: false,
  },
  {
    title: "结束时间",
    dataIndex: "end_time",
    formType: "date",
    search: true,
    showTime: true,
    range: false,
  },
  {
    title: "链接",
    dataIndex: "link",
    formType: "input",
    hide: false,
    addDefaultValue: "",
    commonRules: {
      required: false,
      message: "链接不可以有空格，必须以http或者https开头",
      match: /^(http|https):\/\/[^\s$.?#].[^\s]*$/,
    },
  },
  {
    title: "排序(小->大)",
    dataIndex: "sort",
    formType: "input-number",
    min: 0,
    max: 65534,
    step: 1,
    addDefaultValue: 65534,
    hide: true,
    display: true,
    width: 70,
  },
  {
    title: "开关",
    dataIndex: "is_enabled",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请选择是否启用",
    },
    dict: {
      name: "is_enabled",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    width: 70,
    addDefaultValue: 1,
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
export default { name: "sex8:text" };
</script>
