<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #poster_src="{ record }">
        <a-image
          width="80"
          height="50"
          fit="fit"
          :alt="record.cn_name"
          :src="record.poster_src"
        />
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import pictureAlbum from "@/api/picture/pictureAlbum";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  pictureAlbum
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
  id: "avx_picture_album",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 100,
  operationColumnWidth: 100,
  formOption: {
    viewType: "modal",
    width: 800,
  },
  api: pictureAlbum.getList,
  recycleApi: pictureAlbum.getRecycleList,
  add: {
    show: true,
    api: pictureAlbum.save,
    auth: ["picture:album:save"],
  },
  edit: {
    show: true,
    api: pictureAlbum.update,
    auth: ["picture:album:update"],
  },
  delete: {
    show: true,
    api: pictureAlbum.deletes,
    auth: ["picture:album:delete"],
    realApi: pictureAlbum.realDeletes,
    realAuth: ["picture:album:realDeletes"],
  },
  recovery: {
    show: true,
    api: pictureAlbum.recoverys,
    auth: ["picture:album:recovery"],
  },
  beforeRequest: (params) => {
    // params.orderBy = "id";
    // params.orderType = "desc";
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
    formType: "input-number",
    search: true,
    addDisplay: false,
    editDisplay: false,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "相册名简体",
    dataIndex: "cn_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入相册名（简体中文）",
    },
    width: 250,
  },
  {
    title: "相册名繁体",
    dataIndex: "tw_name",
    formType: "input",
    search: true,
    hide: true,
  },
  {
    title: "相册英文名",
    dataIndex: "en_name",
    formType: "input",
    search: true,
    hide: true,
  },
  {
    title: "相册封面",
    dataIndex: "poster_src",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入相册封面",
    },
  },
  {
    title: "封面缩略图",
    dataIndex: "thumb_src",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入相册封面缩略图",
    },
  },
  {
    title: "点击数",
    dataIndex: "click_count",
    formType: "input",
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "点赞数",
    dataIndex: "like_count",
    formType: "input",
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "星级评价",
    dataIndex: "stars",
    formType: "radio",
    search: true,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    dict: {
      name: "stars",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "包含图片数",
    dataIndex: "pic_count",
    formType: "input",
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
  },
  {
    title: "是否敏感",
    dataIndex: "is_sensitive",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否敏感内容",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    dict: {
      name: "yes_no",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "是否色情",
    dataIndex: "is_porn",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否色情内容",
    },
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true,
    },
    dict: {
      name: "yes_no",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "相册描述",
    dataIndex: "desc",
    formType: "input",
    hide: true,
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
export default { name: "picture:album" };
</script>
