import { request } from "@/utils/request.js";

/**
 * 蜘蛛列表 API JS
 */

export default {
  /**
   * 获取蜘蛛列表分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: "spider/list/index",
      method: "get",
      params,
    });
  },

  /**
   * 添加蜘蛛列表
   * @returns
   */
  save(data = {}) {
    return request({
      url: "spider/list/save",
      method: "post",
      data,
    });
  },

  /**
   * 更新蜘蛛列表数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: "spider/list/update/" + id,
      method: "put",
      data,
    });
  },

  /**
   * 读取蜘蛛列表
   * @returns
   */
  read(data = {}) {
    return request({
      url: "spider/list/read",
      method: "get",
      data,
    });
  },

  /**
   * 将蜘蛛列表删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: "spider/list/delete",
      method: "delete",
      data,
    });
  },

  /**
   * 从回收站获取蜘蛛列表数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: "spider/list/recycle",
      method: "get",
      params,
    });
  },

  /**
   * 恢复蜘蛛列表数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: "spider/list/recovery",
      method: "put",
      data,
    });
  },

  /**
   * 真实删除蜘蛛列表
   * @returns
   */
  realDeletes(data) {
    return request({
      url: "spider/list/realDelete",
      method: "delete",
      data,
    });
  },

  /**
   * 更改蜘蛛列表数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: "spider/list/changeStatus",
      method: "put",
      data,
    });
  },

  /**
   * 启动蜘蛛操作
   * @returns
   */
  startSpider(data = {}) {
    return request({
      url: "spider/list/startSpider",
      method: "post",
      data,
    });
  },

  /**
   * 蜘蛛列表导入
   * @returns
   */
  importExcel(data = {}) {
    return request({
      url: "spider/list/import",
      method: "post",
      data,
    });
  },

  /**
   * 蜘蛛列表下载模板
   * @returns
   */
  downloadTemplate() {
    return request({
      url: "spider/list/downloadTemplate",
      method: "post",
      responseType: "blob",
    });
  },

  /**
   * 蜘蛛列表导出
   * @returns
   */
  exportExcel(params = {}) {
    return request({
      url: "spider/list/export",
      method: "post",
      responseType: "blob",
      params,
    });
  },
};
