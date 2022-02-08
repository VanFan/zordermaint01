sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(Controller, JSONModel, Device) {
	"use strict";
	return Controller.extend("zychcn.zorder_maint01.controller.Master", {
		onInit: function() {
			this.bReplace = !Device.system.phone;
			// this.byId("dynamicMasterPage").setShowFooter(true);
			this.getRouter().getRoute("master").attachPatternMatched(this._onMatched, this);
		},
		onSelectionChange: function(oEvent) {
			var oList = oEvent.getSource();
			var oGuidH = oList.getBindingContextPath().split("'")[1];
			this.getRouter().navTo("detail", {
				guid: oGuidH
			}, false);
			this.getModel("appView").setProperty("/action", "display");
		},
		onCreatePress: function(oEvent) {
			this._showCreate();
		},
		//################ Private APIs ###################
		_onMatched: function() {
			this.getModel("appView").setProperty("/layout", "OneColumn");
			this.getModel("appView").setProperty("/action", "display");
		},
		_showCreate: function() {
			this.getModel("appView").setProperty("/calculateBut", true);
			this.getRouter().navTo("create",{}, this.bReplace);
		}
	});
});