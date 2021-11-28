// 信标状态
export const DWXB_ZT = createEnum({
  XZ: [0, "新增的信标"],
  YD: [1, "移动的信标"],
  YC: [2, "移除信标"], //no
  WSZ: [3, "未设置的信标"], //no
  DDBS: [4, "等待部署的信标"], //no
  YXZ: [5, "运行中的信标"],
});

// 信标类型(父类,没啥用)
export const DWXB_FLX = createEnum({
  ZJD: [0, "中继定位信标"], // 0x00
  WZ: [1, "物资定位信标"], // 0x01
  QSY: [2, "取水源定位信标"], // 0x02
  AQCK: [3, "安全出口定位信标"], // 0x03
  QY: [4, "区域定位信标"], // 0x04
  TZCL: [5, "特种车辆定位信标"], // 0x05
  ZHD: [6, "着火点定位信标"], // 0x06
  BKQZ: [7, "被困群众定位信标"], // 0x07
  ZDY: [254, "自定义定位信标"], // 0xfe
  WDY: [255, "未定义定位信标"], // 0xff
});

// 信标类型(子类)
export const DWXB_LX = createEnum({
  ZJD: [0, "中继点"], // 0x00 0x00
  SPD: [256, "食品点"], // 0x01 0x00
  MHYJ: [257, "灭火药剂"], // 0x01 0x01
  YLD: [258, "油料点"], // 0x01 0x02
  QCD: [259, "器材点"], // 0x01 0x03
  SYBZ: [260, "宿营保障"], // 0x01 0x04
  QSD: [512, "取水点"], // 0x02 0x00
  AQCK: [768, "安全出口"], // 0x03 0x00
  XXQ: [1024, "休息区"], // 0x04 0x00
  DQQ: [1025, "毒气区"], // 0x04 0x01
  GWQ: [1026, "高温区"], // 0x04 0x02
  ZZQ: [1027, "作战区"], // 0x04 0x03
  MHC: [1280, "灭火车"], // 0x05 0x00
  JGC: [1281, "举高车"], // 0x05 0x01
  ZQC: [1282, "专勤车"], // 0x05 0x02
  BZC: [1283, "保障车"], // 0x05 0x03
  ZHD: [1536, "着火点"], // 0x06 0x00
  BKQZ: [1792, "被困群众"], // 0x07 0x00
  ZDY: [65024, "自定义"], // 0xFE 0x00
  WDY: [65535, "未定义"], // 0xFF 0xFF
});

// 3d 模型显示设置
export const MODEL_3D_DISPLAY = createEnum({
  FLOAT: [0, "按照测量高度连续显示"],
  STICK: [1, "固定在楼板"],
});

// 页面类型
export const PAGE_TYPE = createEnum({
  ADD: [1, "新增"],
  CHANGE: [2, "修改"],
  DETAIL: [3, "查看或详情"],
});

// 上传弹出框类型
export const UPLOAD_PAGE_TYPE = createEnum({
  MODEL: [1, "模型上传"],
  IMAGE: [2, "图片上传"],
  HEIGHT: [3, "楼层高度上传"],
});

// 设备类型
export const SBLX = createEnum({
  TYSBLX: [0x00, "通用设备类型"],
  DJQ: [0x01, "登记器"],
  NBWG: [0x02, "NB网关"],
  BXX: [0x03, "便携箱"],
  DWXB: [0x04, "定位信标"],
  CJ: [0x05, "车机"],
  YSDXSJX: [0x08, "原始定向搜救型(RH420-SJ-R)"],
  YSQXSJX: [0x10, "原始全向搜救型(RH420-HJ1-R)"],
  YSLYSJX: [0x18, "原始蓝牙搜救型(RH420-BLEHJ-R)"],
  YSCQSJX: [0x20, "原始场强搜救型(RH420-CQHJ-R)"],
  BXZHZ: [0x48, "便携指挥站"],
  TSLX: [0x78, "特殊类型"],
});

// 发送蓝牙命令
export const BLE_ORDER = createEnum({
  CL: [0, "撤离"],
  HJ: [1, "呼叫"],
  D1: [2, "向搜救器要登记信息"],
});

// 本地API返回码
export const API_CODE = createEnum({
  SUCCEES: [0, "成功"],
  INVALID: [400, "参数不合法"],
  WARNING: [501, "警告"],
  ERROR: [500, "异常"],
});

// 人员地图点的类型
export const PERSON_MARKER_TYPE = createEnum({
  ZHY: [0, "指挥员"],
  AQY: [1, "安全员"],
  XFY: [2, "消防员"],
  NGXFY: [3, "内攻消防员"],
});

// 内攻业务，配对状态
export const NG_PDZT = createEnum({
  WPD: [0, "未佩戴"],
  DSSB: [1, "读数失败"],
  WZ: [2, "未知"],
});

// 弹框类型
export const POP_UP_TYPE = createEnum({
  PLAIN: [1, "纯弹框，无花哨"],
  CONFIRM: [2, "带有确定按钮的标签"],
});

// 地图上绘制线的模式
export const LINE_TYPE = createEnum({
  FULL: [1, "绘制闭合空心"],
  SHADOW: [2, "绘制闭合有阴影"],
  PLAIN: [3, "纯线，不闭合图形"],
});

//要使用的 cesium 类型
export const CESIUM_MAP_TYPE = createEnum({
  BUILDING: [1, "建筑"],
  BEACON: [1 << 1, "信标"],
  PERSON: [1 << 2, "人员"],
  DISASTER: [1 << 3, "灾情"],
  CREATE_DISASTER: [1 << 4, "创建灾情"],
  PLOT: [1 << 5, "标绘小图标"],
})

//使用的 cesium 子类型
export const CESIUM_MAP_SUBTYPE = createEnum({
  CREATE_DISASTER: [{
    CHANGE_DIRECTION: 1,//图形原地旋转
    KEEP_POSITION: 1 << 1, //持续 定位
    DRAW_CURRENT_LOCATION: 1 << 2,// 绘制当前位置图标
    DRAW_EXIST_DISASTER: 1 << 3,//绘制已存在灾情
  }, "创建灾情子类型"]
})

// console.error({CESIUM_MAP_SUBTYPE})

/**
 * 枚举定义工具
 * 示例：
 * const STATUS = createEnum({
 *     AUDIT_WAIT: [1, '审核中'],
 *     AUDIT_PASS: [2, '审核通过']
 * })
 * 获取枚举值：STATUS.AUDIT_WAIT
 * 获取枚举描述：STATUS.getDesc('AUDIT_WAIT')
 * 通过枚举值获取描述：STATUS.getDescFromValue(STATUS.AUDIT_WAIT)
 * 通过描述获取枚举值（若描述重复返回靠后的枚举值）：STATUS.getDescFromValue('审核中')
 */
export default function createEnum(definition) {
  const strToValueMap = {};
  const numToDescMap = {};
  const descToNumMap = {};
  for (const enumName of Object.keys(definition)) {
    const [value, desc] = definition[enumName];
    strToValueMap[enumName] = value;
    numToDescMap[value] = desc;
    descToNumMap[desc] = value;
  }

  return Object.assign(
    Object.create(null, {
      getDesc: {
        value: (enumName) => {
          return (definition[enumName] && definition[enumName][1]) || "";
        },
        enumerable: false,
      },
      getDescFromValue: {
        value: (value) => {
          return numToDescMap[value] || "";
        },
        enumerable: false,
      },
      getValueFromDesc: {
        value: (desc) => {
          return descToNumMap.hasOwnProperty(desc) ? descToNumMap[desc] : "";
        },
        enumerable: false,
      },
    }),
    strToValueMap
  );
}
