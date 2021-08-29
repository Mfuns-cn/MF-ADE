/**
 * json弹幕预处理接口
 */
export interface JsonPreprocessInterface {
  /**
   * 处理弹幕 当返回false说明处理失败
   * @param josn json弹幕
   */
  process(json: any, index: number): any | false;
}
