"use strict";

todoPrj.inc = {};
"use strict";

todoPrj.component = {};
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

todoPrj.layer = new __layer();

function __layer() {
  var me = this;

  me.open = function (layerId) {
    me.layerWrapper = "\n        <div class=\"layer\">\n            <div class=\"layer__contentWrapper\"></div>\n        </div>";
    layerId = _typeof(layerId) == "object" ? $(layerId).attr("href") : layerId;
    var hrefId = layerId.replace("#", "");
    var $layerContent;
    $(".layer__content").each(function (i) {
      if ($(this).attr("data-layerId") == hrefId) {
        $layerContent = $(this);
      }
    });
    console.log($layerContent[0]);
    todoPrj.body.append(me.layerWrapper);
    $(".layer__contentWrapper").addClass(hrefId);
    $(".layer__contentWrapper").append($layerContent[0]);
  };

  me.close = function () {
    $(".layerWrapper").append($(".layer").find(".layer__content"));
    $(".layer").remove();
  };

  return me;
}