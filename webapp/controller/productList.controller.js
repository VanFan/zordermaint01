sap.ui.define([
	"./BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("zychcn.zorder_maint01.controller.productList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zychcn.zorder_maint01.view.productList
		 */
		onInit: function() {
			this.getRouter().getRoute("productlist").attachPatternMatched(this._onMatched, this);
		},

		onSearch: function(oEvetn) {
			this.filterTable();
		},
		filterTable: function() {
			var _oItemsBinding = this.byId("productListTable").getTable().getBinding("items");
			if (_oItemsBinding) {
				_oItemsBinding.filter(this.getFilters(this.getModel("appView").getProperty("/productList")));
			}
		},
		getFilters: function(aCurrentFilterValues) {
			var _aFilters = [];
			for (var _index in aCurrentFilterValues) {
				if (aCurrentFilterValues[_index]) {
					_aFilters.push(new sap.ui.model.Filter(_index, sap.ui.model.FilterOperator.Contains, aCurrentFilterValues[_index]));
				}
			}
			return _aFilters;
		},
		onAdd:function(){
			var _prodTable = this.byId("productListTable").getTable();
			var _selProducts =  _prodTable.getSelectedContexts();
			_selProducts.forEach(function(_item) {
				var _oData =  _item.getObject();
				this.getOwnerComponent().DetailCtl.addItemCust(_oData);
			}.bind(this));
			this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
		},
		
		_onMatched: function(oEvent) {
			this.filterTable();
		}
	});

});