// javascript与HTML之间的交互是通过事件实现的。
// 由于不同的浏览器提供了相似但不同的API。给项目开发带来很多麻烦。
// 外观模式(门面模式)，是一种相对简单而又无处不在的模式。
// 外观模式提供一个高层的简化的接口，这个接口使得客户端或子系统更加方便调用。
// 请使用外观模式实现跨浏览器事件处理

function addEvent(el, type, fn) {
  // 请完善
}

var util = {
  Event: {
    getEvent: function(e) {
      // 请完善
    },
    getTarget: function(e) {
      // 请完善
    },
    stopPropagation: function(e) {
      // 请完善
    },
    preventDefault: function(e) {
      // 请完善
    },
    stopEvent: function(e) {
      // 请完善
    }
  }
};

addEvent($('example'), 'click', function(e) {
  // Who clicked me.
  console.log(util.Event.getTarget(e));
  // Stop propagating and prevent the default action.
  util.Event.stopEvent(e);
});
