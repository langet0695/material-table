"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.default = exports.MTableToolbar = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _styles = require("@mui/material/styles");
var _styles2 = require("@mui/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _filefy = require("filefy");
var _propTypes = _interopRequireWildcard(require("prop-types"));
require("jspdf-autotable");
var React = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-unused-vars */
var jsPDF = typeof window !== "undefined" ? require("jspdf").jsPDF : null;
/* eslint-enable no-unused-vars */
var MTableToolbar = exports.MTableToolbar = /*#__PURE__*/function (_React$Component) {
  function MTableToolbar(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MTableToolbar);
    _this = _callSuper(this, MTableToolbar, [props]);
    (0, _defineProperty2.default)(_this, "onSearchChange", function (searchText) {
      _this.props.dataManager.changeSearchText(searchText);
      _this.setState({
        searchText: searchText
      }, _this.props.onSearchChanged(searchText));
    });
    (0, _defineProperty2.default)(_this, "getTableData", function () {
      var columns = _this.props.columns.filter(function (columnDef) {
        return (!columnDef.hidden || columnDef.export === true) && columnDef.export !== false && columnDef.field;
      }).sort(function (a, b) {
        return a.tableData.columnOrder > b.tableData.columnOrder ? 1 : -1;
      });
      var data = (_this.props.exportAllData ? _this.props.data : _this.props.renderData).map(function (rowData) {
        return columns.map(function (columnDef) {
          return _this.props.getFieldValue(rowData, columnDef);
        });
      });
      return [columns, data];
    });
    (0, _defineProperty2.default)(_this, "defaultExportCsv", function () {
      var _this$getTableData = _this.getTableData(),
        _this$getTableData2 = (0, _slicedToArray2.default)(_this$getTableData, 2),
        columns = _this$getTableData2[0],
        data = _this$getTableData2[1];
      var fileName = _this.props.title || "data";
      if (_this.props.exportFileName) {
        fileName = typeof _this.props.exportFileName === "function" ? _this.props.exportFileName() : _this.props.exportFileName;
      }
      var builder = new _filefy.CsvBuilder(fileName + ".csv");
      builder.setDelimeter(_this.props.exportDelimiter).setColumns(columns.map(function (columnDef) {
        return columnDef.title;
      })).addRows(data).exportFile();
    });
    (0, _defineProperty2.default)(_this, "defaultExportPdf", function () {
      if (jsPDF !== null) {
        var _this$getTableData3 = _this.getTableData(),
          _this$getTableData4 = (0, _slicedToArray2.default)(_this$getTableData3, 2),
          columns = _this$getTableData4[0],
          data = _this$getTableData4[1];
        var content = {
          startY: 50,
          head: [columns.map(function (columnDef) {
            return columnDef.title;
          })],
          body: data
        };
        var unit = "pt";
        var size = "A4";
        var orientation = "landscape";
        var doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        doc.text(_this.props.exportFileName || _this.props.title, 40, 40);
        doc.autoTable(content);
        doc.save((_this.props.exportFileName || _this.props.title || "data") + ".pdf");
      }
    });
    (0, _defineProperty2.default)(_this, "exportCsv", function () {
      if (_this.props.exportCsv) {
        _this.props.exportCsv(_this.props.columns, _this.props.data);
      } else {
        _this.defaultExportCsv();
      }
      _this.setState({
        exportButtonAnchorEl: null
      });
    });
    (0, _defineProperty2.default)(_this, "exportPdf", function () {
      if (_this.props.exportPdf) {
        _this.props.exportPdf(_this.props.columns, _this.props.data);
      } else {
        _this.defaultExportPdf();
      }
      _this.setState({
        exportButtonAnchorEl: null
      });
    });
    _this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null,
      searchText: props.searchText
    };
    return _this;
  }
  (0, _inherits2.default)(MTableToolbar, _React$Component);
  return (0, _createClass2.default)(MTableToolbar, [{
    key: "renderSearch",
    value: function renderSearch() {
      var _this2 = this;
      var localization = (0, _objectSpread2.default)({}, MTableToolbar.defaultProps.localization, this.props.localization);
      if (this.props.search) {
        return /*#__PURE__*/React.createElement(_TextField.default, {
          autoFocus: this.props.searchAutoFocus,
          className: this.props.searchFieldAlignment === "left" && this.props.showTitle === false ? null : this.props.classes.searchField,
          value: this.state.searchText,
          onChange: function onChange(event) {
            return _this2.onSearchChange(event.target.value);
          },
          placeholder: localization.searchPlaceholder,
          variant: this.props.searchFieldVariant,
          InputProps: {
            startAdornment: /*#__PURE__*/React.createElement(_InputAdornment.default, {
              position: "start"
            }, /*#__PURE__*/React.createElement(_Tooltip.default, {
              title: localization.searchTooltip
            }, /*#__PURE__*/React.createElement(this.props.icons.Search, {
              fontSize: "small"
            }))),
            endAdornment: /*#__PURE__*/React.createElement(_InputAdornment.default, {
              position: "end"
            }, /*#__PURE__*/React.createElement(_IconButton.default, {
              disabled: !this.state.searchText,
              onClick: function onClick() {
                return _this2.onSearchChange("");
              },
              "aria-label": localization.clearSearchAriaLabel,
              size: "large"
            }, /*#__PURE__*/React.createElement(this.props.icons.ResetSearch, {
              fontSize: "small",
              "aria-label": "clear"
            }))),
            style: this.props.searchFieldStyle,
            inputProps: {
              "aria-label": localization.searchAriaLabel
            }
          }
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderDefaultActions",
    value: function renderDefaultActions() {
      var _this3 = this;
      var localization = (0, _objectSpread2.default)({}, MTableToolbar.defaultProps.localization, this.props.localization);
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", null, this.props.columnsButton && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_Tooltip.default, {
        title: localization.showColumnsTitle
      }, /*#__PURE__*/React.createElement(_IconButton.default, {
        color: "inherit",
        onClick: function onClick(event) {
          return _this3.setState({
            columnsButtonAnchorEl: event.currentTarget
          });
        },
        "aria-label": localization.showColumnsAriaLabel,
        size: "large"
      }, /*#__PURE__*/React.createElement(this.props.icons.ViewColumn, null))), /*#__PURE__*/React.createElement(_Menu.default, {
        anchorEl: this.state.columnsButtonAnchorEl,
        open: Boolean(this.state.columnsButtonAnchorEl),
        onClose: function onClose() {
          return _this3.setState({
            columnsButtonAnchorEl: null
          });
        }
      }, /*#__PURE__*/React.createElement(_MenuItem.default, {
        key: "text",
        disabled: true,
        style: {
          opacity: 1,
          fontWeight: 600,
          fontSize: 12
        }
      }, localization.addRemoveColumns), this.props.columns.map(function (col) {
        if (!col.hidden || col.hiddenByColumnsButton) {
          return /*#__PURE__*/React.createElement("li", {
            key: col.tableData.id
          }, /*#__PURE__*/React.createElement(_MenuItem.default, {
            className: classes.formControlLabel,
            component: "label",
            htmlFor: "column-toggle-".concat(col.tableData.id),
            disabled: col.removable === false
          }, /*#__PURE__*/React.createElement(_Checkbox.default, {
            checked: !col.hidden,
            id: "column-toggle-".concat(col.tableData.id),
            onChange: function onChange() {
              return _this3.props.onColumnsChanged(col, !col.hidden);
            }
          }), /*#__PURE__*/React.createElement("span", null, col.title)));
        }
        return null;
      }))), this.props.exportButton && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_Tooltip.default, {
        title: localization.exportTitle
      }, /*#__PURE__*/React.createElement(_IconButton.default, {
        color: "inherit",
        onClick: function onClick(event) {
          return _this3.setState({
            exportButtonAnchorEl: event.currentTarget
          });
        },
        "aria-label": localization.exportAriaLabel,
        size: "large"
      }, /*#__PURE__*/React.createElement(this.props.icons.Export, null))), /*#__PURE__*/React.createElement(_Menu.default, {
        anchorEl: this.state.exportButtonAnchorEl,
        open: Boolean(this.state.exportButtonAnchorEl),
        onClose: function onClose() {
          return _this3.setState({
            exportButtonAnchorEl: null
          });
        }
      }, (this.props.exportButton === true || this.props.exportButton.csv) && /*#__PURE__*/React.createElement(_MenuItem.default, {
        key: "export-csv",
        onClick: this.exportCsv
      }, localization.exportCSVName), (this.props.exportButton === true || this.props.exportButton.pdf) && /*#__PURE__*/React.createElement(_MenuItem.default, {
        key: "export-pdf",
        onClick: this.exportPdf
      }, localization.exportPDFName))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(this.props.components.Actions, {
        actions: this.props.actions && this.props.actions.filter(function (a) {
          return a.position === "toolbar";
        }),
        components: this.props.components
      })));
    }
  }, {
    key: "renderSelectedActions",
    value: function renderSelectedActions() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(this.props.components.Actions, {
        actions: this.props.actions.filter(function (a) {
          return a.position === "toolbarOnSelect";
        }),
        data: this.props.selectedRows,
        components: this.props.components
      }));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.actions
      }, /*#__PURE__*/React.createElement("div", null, this.props.selectedRows && this.props.selectedRows.length > 0 ? this.renderSelectedActions() : this.renderDefaultActions()));
    }
  }, {
    key: "renderToolbarTitle",
    value: function renderToolbarTitle(title) {
      var classes = this.props.classes;
      var toolBarTitle = typeof title === "string" ? /*#__PURE__*/React.createElement(_Typography.default, {
        variant: "h6",
        style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, title) : title;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.title
      }, toolBarTitle);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var localization = (0, _objectSpread2.default)({}, MTableToolbar.defaultProps.localization, this.props.localization);
      var title = this.props.showTextRowsSelected && this.props.selectedRows && this.props.selectedRows.length > 0 ? typeof localization.nRowsSelected === "function" ? localization.nRowsSelected(this.props.selectedRows.length) : localization.nRowsSelected.replace("{0}", this.props.selectedRows.length) : this.props.showTitle ? this.props.title : null;
      return /*#__PURE__*/React.createElement(_Toolbar.default, {
        className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.highlight, this.props.showTextRowsSelected && this.props.selectedRows && this.props.selectedRows.length > 0))
      }, title && this.renderToolbarTitle(title), this.props.searchFieldAlignment === "left" && this.renderSearch(), this.props.toolbarButtonAlignment === "left" && this.renderActions(), /*#__PURE__*/React.createElement("div", {
        className: classes.spacer
      }), this.props.searchFieldAlignment === "right" && this.renderSearch(), this.props.toolbarButtonAlignment === "right" && this.renderActions());
    }
  }]);
}(React.Component);
MTableToolbar.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    addRemoveColumns: "Add or remove columns",
    nRowsSelected: "{0} row(s) selected",
    showColumnsTitle: "Show Columns",
    showColumnsAriaLabel: "Show Columns",
    exportTitle: "Export",
    exportAriaLabel: "Export",
    exportCSVName: "Export as CSV",
    exportPDFName: "Export as PDF",
    searchTooltip: "Search",
    searchPlaceholder: "Search",
    searchAriaLabel: "Search",
    clearSearchAriaLabel: "Clear Search"
  },
  search: true,
  showTitle: true,
  searchText: "",
  showTextRowsSelected: true,
  toolbarButtonAlignment: "right",
  searchAutoFocus: false,
  searchFieldAlignment: "right",
  searchFieldVariant: "standard",
  selectedRows: [],
  title: "No Title!"
};
MTableToolbar.propTypes = {
  actions: _propTypes.default.array,
  columns: _propTypes.default.array,
  columnsButton: _propTypes.default.bool,
  components: _propTypes.default.object.isRequired,
  getFieldValue: _propTypes.default.func.isRequired,
  localization: _propTypes.default.object.isRequired,
  onColumnsChanged: _propTypes.default.func.isRequired,
  dataManager: _propTypes.default.object.isRequired,
  searchText: _propTypes.default.string,
  onSearchChanged: _propTypes.default.func.isRequired,
  search: _propTypes.default.bool.isRequired,
  searchFieldStyle: _propTypes.default.object,
  searchFieldVariant: _propTypes.default.string,
  selectedRows: _propTypes.default.array,
  title: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  showTitle: _propTypes.default.bool.isRequired,
  showTextRowsSelected: _propTypes.default.bool.isRequired,
  toolbarButtonAlignment: _propTypes.default.string.isRequired,
  searchFieldAlignment: _propTypes.default.string.isRequired,
  renderData: _propTypes.default.array,
  data: _propTypes.default.array,
  exportAllData: _propTypes.default.bool,
  exportButton: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    csv: _propTypes.default.bool,
    pdf: _propTypes.default.bool
  })]),
  exportDelimiter: _propTypes.default.string,
  exportFileName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  exportCsv: _propTypes.default.func,
  exportPdf: _propTypes.default.func,
  classes: _propTypes.default.object,
  searchAutoFocus: _propTypes.default.bool
};
var styles = exports.styles = function styles(theme) {
  return {
    root: {
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.mode === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _styles.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: "1 1 10%"
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      overflow: "hidden"
    },
    searchField: {
      minWidth: 150,
      paddingLeft: theme.spacing(2)
    },
    formControlLabel: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  };
};
var _default = exports.default = (0, _styles2.withStyles)(styles)(MTableToolbar);