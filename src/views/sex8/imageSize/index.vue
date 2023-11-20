<template>
  <div>
    <a-alert type="info" :show-icon="false">
      <a-space>
        <a-typography-text bold underline>👩杏吧导航</a-typography-text>
        >
        <a-typography-text bold underline>广告图大小定义</a-typography-text>
        <icon-notification />
        <a-typography-text>
          所有上传的广告图将按照此处定义大小自动调整，所以务必让广告商图片符合比例。100x100的图，用50x50或300x300都是可以的，都是符合比例的
        </a-typography-text>
      </a-space>
    </a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #tableAfterButtons>
          <a-button type="outline" @click="syncImages" class="w-full lg:w-auto">
            <template #icon>
              <icon-sync />
            </template>
            同步图库
          </a-button>
        </template>
      </ma-crud>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import staticImageSize from "@/api/static/staticImageSize";
import { error, success } from "@/utils/common";

const crudRef = ref();

const syncImages = async () => {
  let r = await staticImageSize.syncImages();
  if (r.success === true) {
    return success("ok", "success");
  }
  return error("failed", "failed");
};

const SITE_ID = import.meta.env.VITE_APP_SEX8_ID;

const options = reactive({
  expandSearch: false,
  id: "n_sex8_image_size",
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
  api: staticImageSize.getList,
  recycleApi: staticImageSize.getRecycleList,
  add: {
    show: true,
    api: staticImageSize.save,
    auth: ["sex8:imageSize:save"],
  },
  edit: {
    show: true,
    api: staticImageSize.update,
    auth: ["sex8:imageSize:update"],
  },
  delete: {
    show: true,
    api: staticImageSize.deletes,
    auth: ["sex8:imageSize:delete"],
    realApi: staticImageSize.realDeletes,
    realAuth: ["sex8:imageSize:realDeletes"],
  },
  recovery: {
    show: true,
    api: staticImageSize.recoverys,
    auth: ["sex8:imageSize:recovery"],
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
  beforeDelete: () => {
    return true;
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
    title: "所属站点",
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
    hide: false,
    addDisplay: false,
    editDisplay: false,
    addDefaultValue: SITE_ID,
    disabled: true,
    width: 100,
  },
  {
    title: "位置",
    dataIndex: "position",
    formType: "radio",
    search: true,
    dict: {
      name: "lele-ad-pos",
      translation: true,
      props: {
        label: "title",
        value: "key",
      },
    },
    commonRules: {
      required: true,
      message: "请输入位置",
    },
    multiple: false,
  },
  {
    title: "标准宽度",
    dataIndex: "width",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入标准宽度",
    },
    min: 1,
  },
  {
    title: "标准高度",
    dataIndex: "height",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入标准高度",
    },
    min: 1,
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
export default { name: "sex8:imageSize" };
</script>