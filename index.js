// effect
// delay supported

var $ = require('jquery'),
    Events = require('events');

var defaults = {
    triggerType: 'click',
    tabActiveClass: 'moekit-tab-active',
    tabActiveIndex: 0
};
var Tabber = function (options) {
    this.o = $.extend({}, defaults, options);
    this.$tabItems = $(this.o.tabs);
    this.$panels = $(this.o.panels);
    this._init();
};

// mixin
Events.mixTo(Tabber);

Tabber.prototype._bind = function () {
    var _this = this;
    _this.$tabItems.on(this.o.triggerType, function (e) {
        e.preventDefault();
        var $this = $(this);
        var index = $this.index();
        _this.show(index);
    });
};

Tabber.prototype.show = function (index) {
    this.$tabItems.eq(index).addClass(this.o.tabActiveClass).siblings().removeClass(this.o.tabActiveClass);
    this.$panels.eq(index).show().siblings().hide();
    this.trigger('show', index);
};

Tabber.prototype._init = function () {
    this._bind();
    this.$tabItems.eq(this.o.tabActiveIndex).trigger(this.o.triggerType);
    this.trigger('init');
};

module.exports = Tabber;
