sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createFieldModel:function(){
			var oModel = new JSONModel(this.getDefaultFieldConfig());
			return oModel;
		},
		getDefaultFieldConfig:function(){
			return	{
				"HEADER":{
					"PROCESS_TYPE":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"OBJECT_ID":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"YOUR_REF_SOLD":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"CONTRACT_ID":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"CODE":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"STATUS":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"SOLDTO_ID":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"SOLDTO_NAME":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"ADDRNUMBER":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"NET_VALUE":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"TAX_AMOUNT":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"GROSS_VALUE":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"NOTES_ZCOS":{"EDIT":false,"VISIBLE":true,"REQUIRED":false}
					},
				"ITEM":{
					"NUMBER_INT":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"SHORT_TEXT":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"PRODUCT_ID":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"QUANTITY":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"NUMBER_PARENT":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"KBETR":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"NET_PRICE":{"EDIT":false,"VISIBLE":true,"REQUIRED":false},
					"GROSS_VALUE":{"EDIT":false,"VISIBLE":true,"REQUIRED":false}
				}
			};
		}

	};
});