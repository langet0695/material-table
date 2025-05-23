"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var React = _interopRequireWildcard(require("react"));
var _reactBeautifulDnd = require("react-beautiful-dnd");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
var MTableGroupbar = /*#__PURE__*/function (_React$Component) {
  function MTableGroupbar(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MTableGroupbar);
    _this = _callSuper(this, MTableGroupbar, [props]);
    (0, _defineProperty2.default)(_this, "getItemStyle", function (isDragging, draggableStyle) {
      return (0, _objectSpread2.default)({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        // padding: '8px 16px',
        margin: "0 ".concat(8, "px 0 0")
      }, draggableStyle);
    });
    (0, _defineProperty2.default)(_this, "getListStyle", function (isDraggingOver) {
      return {
        // background: isDraggingOver ? 'lightblue' : '#0000000a',
        background: "#0000000a",
        display: "flex",
        width: "100%",
        padding: 8,
        overflow: "auto",
        border: "1px solid #ccc",
        borderStyle: "dashed"
      };
    });
    _this.state = {};
    return _this;
  }
  (0, _inherits2.default)(MTableGroupbar, _React$Component);
  return (0, _createClass2.default)(MTableGroupbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement(_Toolbar.default, {
        style: {
          padding: 0,
          minHeight: "unset"
        }
      }, /*#__PURE__*/React.createElement(_reactBeautifulDnd.Droppable, {
        droppableId: "groups",
        direction: "horizontal",
        placeholder: "Deneme"
      }, function (provided, snapshot) {
        return /*#__PURE__*/React.createElement("div", {
          ref: provided.innerRef,
          style: _this2.getListStyle(snapshot.isDraggingOver)
        }, _this2.props.groupColumns.length > 0 && /*#__PURE__*/React.createElement(_Typography.default, {
          variant: "caption",
          style: {
            padding: 8
          }
        }, _this2.props.localization.groupedBy), _this2.props.groupColumns.map(function (columnDef, index) {
          return /*#__PURE__*/React.createElement(_reactBeautifulDnd.Draggable, {
            key: columnDef.tableData.id,
            draggableId: columnDef.tableData.id.toString(),
            index: index
          }, function (provided, snapshot) {
            return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
              ref: provided.innerRef
            }, provided.draggableProps, provided.dragHandleProps, {
              style: _this2.getItemStyle(snapshot.isDragging, provided.draggableProps.style)
            }), /*#__PURE__*/React.createElement(_Chip.default, (0, _extends2.default)({}, provided.dragHandleProps, {
              onClick: function onClick() {
                return _this2.props.onSortChanged(columnDef);
              },
              label: /*#__PURE__*/React.createElement("div", {
                style: {
                  display: "flex",
                  alignItems: "center"
                }
              }, /*#__PURE__*/React.createElement("div", {
                style: {
                  float: "left"
                }
              }, columnDef.title), columnDef.tableData.groupSort && /*#__PURE__*/React.createElement(_this2.props.icons.SortArrow, {
                style: {
                  transition: "300ms ease all",
                  transform: columnDef.tableData.groupSort === "asc" ? "rotate(-180deg)" : "none",
                  fontSize: 18
                }
              })),
              style: {
                boxShadow: "none",
                textTransform: "none"
              },
              onDelete: function onDelete() {
                return _this2.props.onGroupRemoved(columnDef, index);
              }
            })));
          });
        }), _this2.props.groupColumns.length === 0 && /*#__PURE__*/React.createElement(_Typography.default, {
          variant: "caption",
          style: {
            padding: 8
          }
        }, _this2.props.localization.placeholder), provided.placeholder);
      }));
    }
  }]);
}(React.Component);
MTableGroupbar.defaultProps = {};
MTableGroupbar.propTypes = {
  localization: _propTypes.default.shape({
    groupedBy: _propTypes.default.string,
    placeholder: _propTypes.default.string
  })
};
var _default = exports.default = MTableGroupbar;