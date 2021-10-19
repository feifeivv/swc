function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}, A = function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
    }
    return _createClass(A, [
        {
            key: "method",
            value: function() {
                var B = function() {
                    function B() {
                        _classCallCheck(this, B);
                    }
                    return _createClass(B, [
                        {
                            key: "method",
                            value: function() {
                                new A();
                            }
                        }
                    ]), B;
                }(), C = function(A) {
                    function C() {
                        return _classCallCheck(this, C), _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
                    }
                    return _inherits(C, A), C;
                }(A);
            }
        }
    ]), A;
}(), D = function() {
    "use strict";
    function D() {
        _classCallCheck(this, D);
    }
    return _createClass(D, [
        {
            key: "method",
            value: function() {
                var E = function() {
                    function E() {
                        _classCallCheck(this, E);
                    }
                    return _createClass(E, [
                        {
                            key: "method",
                            value: function() {
                                new D();
                            }
                        }
                    ]), E;
                }(), F = function(D) {
                    function F() {
                        return _classCallCheck(this, F), _possibleConstructorReturn(this, _getPrototypeOf(F).apply(this, arguments));
                    }
                    return _inherits(F, D), F;
                }(D);
            }
        }
    ]), D;
}();