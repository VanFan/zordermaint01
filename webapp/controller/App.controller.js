sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("zychcn.zorder_maint01.controller.App", {

		onInit: function() {
			var
				fnSetAppNotBusy,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			var appViewModel = new JSONModel({
				action: "",
				saveBut:         false,
				submitBut:       false,
				calculateBut:    false,
				tabvisible:      false,
				qualificFlag:    false,
				dialogOkVisible: false,
				busy: true,
				delay: 0,
				layout:"OneColumn",
				previousLayout: "",
				productList: {
					PARTNER: "",
					PROCESS_TYPE: "",
					YOUR_REF_SOLD: "",
					CONTRACT_ID: ""
				}
			});

			this.setModel(appViewModel, "appView");

			fnSetAppNotBusy = function() {
				appViewModel.setProperty("/busy", false);
				appViewModel.setProperty("/delay", iOriginalBusyDelay);
			}.bind(this);

			//this.oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
			this.oMessageManager = sap.ui.getCore().getMessageManager();
			var oMessagesModel   = this.oMessageManager.getMessageModel();
			this.oMessageManager.registerObject(this.getView(), true);
			this.getView().setModel(oMessagesModel, "message");

			this.oOwnerComponent = this.getOwnerComponent();
			// since then() has no "reject"-path attach to the MetadataFailed-Event to disable the busy indicator in case of an error
			this.oOwnerComponent.getModel().metadataLoaded().then(fnSetAppNotBusy);
			this.oOwnerComponent.getModel().attachMetadataFailed(fnSetAppNotBusy);

			// apply content density mode to root view
			this.getView().addStyleClass(this.oOwnerComponent.getContentDensityClass());
		}
	});
});