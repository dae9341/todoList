"use strict";

Vue.component('aaa-abc', {
  render: function render(h) {
    return h("div", ["test!!"]);
  }
});

function vueTest() {
  new Vue({
    el: "#test22"
  });
}

$(function () {
  vueTest();
});