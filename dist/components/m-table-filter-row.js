"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _Input = _interopRequireDefault(require("@mui/material/Input"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdapterDateFns = _interopRequireDefault(require("@mui/lab/AdapterDateFns"));
var _lab = require("@mui/lab");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-unused-vars */
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var MTableFilterRow = /*#__PURE__*/function (_React$Component) {
  function MTableFilterRow() {
    var _this;
    (0, _classCallCheck2.default)(this, MTableFilterRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTableFilterRow, [].concat(args));
    (0, _defineProperty2.default)(_this, "getLocalizationData", function () {
      return (0, _objectSpread2.default)({}, MTableFilterRow.defaultProps.localization, _this.props.localization);
    });
    (0, _defineProperty2.default)(_this, "getLocalizedFilterPlaceHolder", function (columnDef) {
      return columnDef.filterPlaceholder || _this.getLocalizationData().filterPlaceHolder || "";
    });
    (0, _defineProperty2.default)(_this, "LookupFilter", function (_ref) {
      var columnDef = _ref.columnDef;
      var _React$useState = React.useState(columnDef.tableData.filterValue || []),
        _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
        selectedFilter = _React$useState2[0],
        setSelectedFilter = _React$useState2[1];
      React.useEffect(function () {
        setSelectedFilter(columnDef.tableData.filterValue || []);
      }, [columnDef.tableData.filterValue]);
      return /*#__PURE__*/React.createElement(_FormControl.default, {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement(_InputLabel.default, {
        htmlFor: "select-multiple-checkbox" + columnDef.tableData.id,
        style: {
          marginTop: -16
        }
      }, _this.getLocalizedFilterPlaceHolder(columnDef)), /*#__PURE__*/React.createElement(_Select.default, {
        multiple: true,
        value: selectedFilter,
        onClose: function onClose() {
          if (columnDef.filterOnItemSelect !== true) _this.props.onFilterChanged(columnDef.tableData.id, selectedFilter);
        },
        onChange: function onChange(event) {
          setSelectedFilter(event.target.value);
          if (columnDef.filterOnItemSelect === true) _this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        },
        input: /*#__PURE__*/React.createElement(_Input.default, {
          id: "select-multiple-checkbox" + columnDef.tableData.id
        }),
        renderValue: function renderValue(selecteds) {
          return selecteds.map(function (selected) {
            return columnDef.lookup[selected];
          }).join(", ");
        },
        MenuProps: MenuProps,
        style: {
          marginTop: 0
        }
      }, Object.keys(columnDef.lookup).map(function (key) {
        return /*#__PURE__*/React.createElement(_MenuItem.default, {
          key: key,
          value: key
        }, /*#__PURE__*/React.createElement(_Checkbox.default, {
          checked: selectedFilter.indexOf(key.toString()) > -1
        }), /*#__PURE__*/React.createElement(_ListItemText.default, {
          primary: columnDef.lookup[key]
        }));
      })));
    });
    (0, _defineProperty2.default)(_this, "renderFilterComponent", function (columnDef) {
      return React.createElement(columnDef.filterComponent, {
        columnDef: columnDef,
        onFilterChanged: _this.props.onFilterChanged
      });
    });
    (0, _defineProperty2.default)(_this, "renderBooleanFilter", function (columnDef) {
      return /*#__PURE__*/React.createElement(_Checkbox.default, {
        indeterminate: columnDef.tableData.filterValue === undefined,
        checked: columnDef.tableData.filterValue === "checked",
        onChange: function onChange() {
          var val;
          if (columnDef.tableData.filterValue === undefined) {
            val = "checked";
          } else if (columnDef.tableData.filterValue === "checked") {
            val = "unchecked";
          }
          _this.props.onFilterChanged(columnDef.tableData.id, val);
        }
      });
    });
    (0, _defineProperty2.default)(_this, "renderDefaultFilter", function (columnDef) {
      var localization = _this.getLocalizationData();
      var FilterIcon = _this.props.icons.Filter;
      return /*#__PURE__*/React.createElement(_TextField.default, {
        style: columnDef.type === "numeric" ? {
          float: "right"
        } : {},
        type: columnDef.type === "numeric" ? "number" : "search",
        value: columnDef.tableData.filterValue || "",
        placeholder: _this.getLocalizedFilterPlaceHolder(columnDef),
        onChange: function onChange(event) {
          _this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        },
        inputProps: {
          "aria-label": "filter data by ".concat(columnDef.title)
        },
        InputProps: _this.props.hideFilterIcons || columnDef.hideFilterIcon ? undefined : {
          startAdornment: /*#__PURE__*/React.createElement(_InputAdornment.default, {
            position: "start"
          }, /*#__PURE__*/React.createElement(_Tooltip.default, {
            title: localization.filterTooltip
          }, /*#__PURE__*/React.createElement(FilterIcon, null)))
        }
      });
    });
    (0, _defineProperty2.default)(_this, "renderDateTypeFilter", function (columnDef) {
      var onDateInputChange = function onDateInputChange(date) {
        return _this.props.onFilterChanged(columnDef.tableData.id, date);
      };
      var pickerProps = {
        value: columnDef.tableData.filterValue || null,
        onChange: onDateInputChange,
        placeholder: _this.getLocalizedFilterPlaceHolder(columnDef),
        clearable: true
      };
      var dateInputElement = null;
      if (columnDef.type === "date") {
        dateInputElement = /*#__PURE__*/React.createElement(_lab.DatePicker, pickerProps);
      } else if (columnDef.type === "datetime") {
        dateInputElement = /*#__PURE__*/React.createElement(_lab.DateTimePicker, pickerProps);
      } else if (columnDef.type === "time") {
        dateInputElement = /*#__PURE__*/React.createElement(_lab.TimePicker, pickerProps);
      }
      return /*#__PURE__*/React.createElement(_lab.LocalizationProvider, {
        dateAdapter: _AdapterDateFns.default,
        locale: _this.props.localization.dateTimePickerLocalization
      }, dateInputElement);
    });
    return _this;
  }
  (0, _inherits2.default)(MTableFilterRow, _React$Component);
  return (0, _createClass2.default)(MTableFilterRow, [{
    key: "getComponentForColumn",
    value: function getComponentForColumn(columnDef) {
      if (columnDef.filtering === false) {
        return null;
      }
      if (columnDef.field || columnDef.customFilterAndSearch) {
        if (columnDef.filterComponent) {
          return this.renderFilterComponent(columnDef);
        } else if (columnDef.lookup) {
          return /*#__PURE__*/React.createElement(this.LookupFilter, {
            columnDef: columnDef
          });
        } else if (columnDef.type === "boolean") {
          return this.renderBooleanFilter(columnDef);
        } else if (["date", "datetime", "time"].includes(columnDef.type)) {
          return this.renderDateTypeFilter(columnDef);
        } else {
          return this.renderDefaultFilter(columnDef);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var columns = this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
      }).sort(function (a, b) {
        return a.tableData.columnOrder - b.tableData.columnOrder;
      }).map(function (columnDef) {
        return /*#__PURE__*/React.createElement(_TableCell.default, {
          key: columnDef.tableData.id,
          style: (0, _objectSpread2.default)({}, _this2.props.filterCellStyle, columnDef.filterCellStyle)
        }, _this2.getComponentForColumn(columnDef));
      });
      if (this.props.selection) {
        columns.splice(0, 0, /*#__PURE__*/React.createElement(_TableCell.default, {
          padding: "none",
          key: "key-selection-column"
        }));
      }
      if (this.props.hasActions) {
        if (this.props.actionsColumnIndex === -1) {
          columns.push(/*#__PURE__*/React.createElement(_TableCell.default, {
            key: "key-action-column"
          }));
        } else {
          var endPos = 0;
          if (this.props.selection) {
            endPos = 1;
          }
          columns.splice(this.props.actionsColumnIndex + endPos, 0, /*#__PURE__*/React.createElement(_TableCell.default, {
            key: "key-action-column"
          }));
        }
      }
      if (this.props.hasDetailPanel) {
        var alignment = this.props.detailPanelColumnAlignment;
        var index = alignment === "left" ? 0 : columns.length;
        columns.splice(index, 0, /*#__PURE__*/React.createElement(_TableCell.default, {
          padding: "none",
          key: "key-detail-panel-column"
        }));
      }
      if (this.props.isTreeData > 0) {
        columns.splice(0, 0, /*#__PURE__*/React.createElement(_TableCell.default, {
          padding: "none",
          key: "key-tree-data-filter"
        }));
      }
      this.props.columns.filter(function (columnDef) {
        return columnDef.tableData.groupOrder > -1;
      }).forEach(function (columnDef) {
        columns.splice(0, 0, /*#__PURE__*/React.createElement(_TableCell.default, {
          padding: "checkbox",
          key: "key-group-filter" + columnDef.tableData.id
        }));
      });
      return /*#__PURE__*/React.createElement(_TableRow.default, {
        style: (0, _objectSpread2.default)({
          height: 10
        }, this.props.filterRowStyle)
      }, columns);
    }
  }]);
}(React.Component);
MTableFilterRow.defaultProps = {
  columns: [],
  detailPanelColumnAlignment: "left",
  selection: false,
  hasActions: false,
  localization: {
    filterTooltip: "Filter"
  },
  hideFilterIcons: false
};
MTableFilterRow.propTypes = {
  columns: _propTypes.default.array.isRequired,
  hasDetailPanel: _propTypes.default.bool.isRequired,
  detailPanelColumnAlignment: _propTypes.default.string,
  isTreeData: _propTypes.default.bool.isRequired,
  onFilterChanged: _propTypes.default.func.isRequired,
  filterCellStyle: _propTypes.default.object,
  filterRowStyle: _propTypes.default.object,
  selection: _propTypes.default.bool.isRequired,
  actionsColumnIndex: _propTypes.default.number,
  hasActions: _propTypes.default.bool,
  localization: _propTypes.default.object,
  hideFilterIcons: _propTypes.default.bool
};
var _default = exports.default = MTableFilterRow;