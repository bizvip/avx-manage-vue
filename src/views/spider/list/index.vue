<template>
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
      <!-- 操作前置扩展 -->
      <template #operationBeforeExtend="{ record }">
        <a-link @click="startSpider(record.id)">
          <icon-bug />
          启动蜘蛛
        </a-link>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import spiderList from "@/api/spider/spiderList";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const updateValue = (value, id, name) => {
  spiderList
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

const startSpider = (id) => {
  spiderList
    .startSpider({ id })
    .then((res) => {
      res.success && Message.success(res.message);
      crudRef.value.refresh();
    })
    .catch((e) => {
      console.log(e);
    });
};

const options = reactive({
  id: "avx_spider_list",
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
  api: spiderList.getList,
  recycleApi: spiderList.getRecycleList,
  add: {
    show: true,
    api: spiderList.save,
    auth: ["spider:list:save"],
  },
  edit: {
    show: true,
    api: spiderList.update,
    auth: ["spider:list:update"],
  },
  delete: {
    show: true,
    api: spiderList.deletes,
    auth: ["spider:list:delete"],
    realApi: spiderList.realDeletes,
    realAuth: ["spider:list:realDeletes"],
  },
  recovery: {
    show: true,
    api: spiderList.recoverys,
    auth: ["spider:list:recovery"],
  },
  import: {
    show: true,
    url: "spider/list/import",
    templateUrl: "spider/list/downloadTemplate",
    auth: ["spider:list:import"],
  },
  export: {
    show: true,
    url: "spider/list/export",
    auth: ["spider:list:export"],
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
    hide: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "蜘蛛程序英文名",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入蜘蛛程序英文名",
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
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
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
</script>
<script>
export default { name: "spider:list" };
</script>
