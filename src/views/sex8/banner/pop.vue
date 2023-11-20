<template>
  <div>
    <a-alert type="info" :show-icon="false">
      <a-space>
        <a-typography-text bold underline>👩杏吧导航</a-typography-text>
        >
        <a-typography-text bold underline>进入弹窗广告</a-typography-text>
        <icon-notification />
        <a-typography-text> 排序 ：排序数字 小 -> 大</a-typography-text>
        <icon-notification />
        <a-typography-text
          >本广告位图片标准比例：400(宽) x 450(高)</a-typography-text
        >
      </a-space>
    </a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #img_src="{ record }">
          <a-image
            width="200"
            height="70"
            fit="contain"
            :alt="record.title"
            :src="record.img_src"
          />
        </template>
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
        <template #sort="{ record }">
          <a-input-number
            v-model="record.sort"
            @change="updateValue($event, record.id, 'sort')"
            :min="0"
            :max="65534"
          />
        </template>
      </ma-crud>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import staticBanner from "@/api/static/staticBanner";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const SITE_ID = import.meta.env.VITE_APP_SEX8_ID;
const POS = 7;

const updateValue = (value, id, name) => {
  staticBanner
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
  id: "n_sex8_pop",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 100,
  operationColumnWidth: 100,
  formOption: {
    viewType: "modal",
    width: 600,
  },
  api: staticBanner.getList,
  recycleApi: staticBanner.getRecycleList,
  add: {
    show: true,
    api: staticBanner.save,
    auth: ["sex8:pop:save"],
  },
  edit: {
    show: true,
    api: staticBanner.update,
    auth: ["sex8:pop:update"],
  },
  delete: {
    show: true,
    api: staticBanner.deletes,
    auth: ["sex8:pop:delete"],
    realApi: staticBanner.realDeletes,
    realAuth: ["sex8:pop:realDeletes"],
  },
  recovery: {
    show: true,
    api: staticBanner.recoverys,
    auth: ["sex8:pop:recovery"],
  },
  beforeRequest: (params) => {
    params.orderBy = "sort";
    params.orderType = "asc";
    params.site_id = SITE_ID;
    params.position = POS;
  },
  beforeAdd: (formData) => {
    formData.site_id = SITE_ID;
    formData.position = POS;
  },
  beforeEdit: (formData) => {
    formData.site_id = SITE_ID;
    formData.position = POS;
  },
  beforeDelete: () => {
    return true;
  },
});

//columns defined
const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    width: 75,
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
    disabled: true,
    width: 80,
  },
  {
    title: "标题",
    dataIndex: "title",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入合法标题,只允许中文、英文大小写、数字,2-32个字符之间",
      match: /^[A-Za-z0-9\u4e00-\u9fa5]{2,32}$/,
    },
    extra: "只允许中文、英文大小写、数字，2-32个字符之间",
    width: 100,
  },
  {
    title: "链接",
    dataIndex: "link",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入链接，不可以有空格，必须以http或者https开头",
      match: /^(http|https):\/\/[^\s$.?#].[^\s]*$/,
    },
    width: 100,
  },
  {
    title: "图片",
    dataIndex: "img_src",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请上传图片",
    },
    multiple: false,
    onlyData: false,
    onlyUrl: false,
    chunk: false,
    type: "image",
    width: 150,
  },
  {
    title: "价格(RMB)",
    dataIndex: "price",
    formType: "input",
    search: false,
    commonRules: {
      required: true,
      message: "请填写价格",
      match: /^(?:\d{1,8}\.\d{1,2}|\d{1,10})$/,
    },
    extra: "如果是CPA，请填写每次单价",
    width: 80,
  },
  {
    title: "价格类型",
    dataIndex: "price_type",
    formType: "radio",
    commonRules: {
      required: true,
      message: "必须选择价格类型",
    },
    hide: false,
    dict: {
      name: "ad-type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
    width: 70,
  },
  {
    title: "排序(小->大)",
    dataIndex: "sort",
    formType: "input-number",
    min: 0,
    max: 65534,
    step: 1,
    addDefaultValue: 65534,
    hide: false,
    display: true,
    width: 80,
  },
  {
    title: "图片属性",
    dataIndex: "img_info",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "开始时间",
    dataIndex: "begin_time",
    formType: "date",
    search: true,
    showTime: true,
    range: false,
    width: 100,
  },
  {
    title: "结束时间",
    dataIndex: "end_time",
    formType: "date",
    search: true,
    showTime: true,
    range: false,
    width: 100,
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
    title: "备注",
    dataIndex: "remark",
    formType: "textarea",
    addDisplay: true,
    editDisplay: true,
    hide: false,
    addDefaultValue: "",
    search: true,
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
export default { name: "sex8:pop" };
</script>