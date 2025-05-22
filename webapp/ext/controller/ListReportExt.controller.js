sap.ui.define([], function () {
	"use strict";
	return {
		openSpreadsheetUpload: async function (oEvent) {
			this.getView().setBusyIndicatorDelay(0);
			this.getView().setBusy(true);

			this.spreadsheetUpload = await this.getView()
				.getController()
				.getOwnerComponent()
				.createComponent({
					usage: "spreadsheetImporter",
					async: true,
					componentData: {
						context: this,
						activateDraft: false,
						showBackendErrorMessages: false
					}
				});

			// event to check before uploaded to app
			this.spreadsheetUpload.attachCheckBeforeRead(function (oEvent) {
				// // example
				// const sheetData = oEvent.getParameter("sheetData");
				// let errorArray = [];
				// for (const [index, row] of sheetData.entries()) {
				// 	//check for invalid price
				// 	for (const key in row) {
				// 		if (key.endsWith("[DataInicio]")) {

				// 		}
				// 		//errorArray.push(error);
				// 	}
				// }
				// //oEvent.getSource().addArrayToMessages(errorArray);
			}, this);

			// attach function on event to change data before send to backend
			// this.spreadsheetUpload.attachChangeBeforeCreate(function (event) {
			// 	let payload = event.getParameter("payload");
			// 	let DataInicio;
			// 	let DataTermino;
			// 	let HoraInicio;
			// 	let HoraTermino;
			// 	let strHoraInicio = payload.HoraInicio.toString();
			// 	let strHoraTermino = payload.HoraTermino.toString();
			// 	if (payload.DataInicio) {
			// 		DataInicio = `/Date(${new Date(`${payload.DataInicio}`).getTime().toString()})/`;
			// 		payload.DataInicio = DataInicio;
			// 	}
			// 	if (payload.DataTermino) {
			// 		DataTermino = `/Date(${new Date(`${payload.DataTermino}`).getTime().toString()})/`;
			// 		payload.DataTermino = DataTermino;
			// 	}
			// 	if (payload.HoraInicio) {
			// 		HoraInicio = 'PT' + strHoraInicio.substring(0,2) + 'H' + strHoraInicio.substring(3,5) + 'M' + '00S';
			// 		payload.HoraInicio = HoraInicio;
			// 	}
			// 	if (payload.HoraTermino) {
			// 		HoraTermino = 'PT' + strHoraTermino.substring(0,2) + 'H' + strHoraTermino.substring(3,5) + 'M' + '00S';
			// 		payload.HoraTermino = HoraTermino;
			// 	}
			// 	return payload;
			// }, this);
			
			this.spreadsheetUpload.attachRequestCompleted(function (oEvent) {
				const success = oEvent.getParameter("success");
				if (success) {
					console.log("Request Completed");
				} else {
					console.log("Request Failed");
				}
			}, this);

			this.spreadsheetUpload.openSpreadsheetUploadDialog();
			this.getView().setBusy(false);
		},
		submit: async function () {
			//const type = "OrdersService.Orders";
			// const payload = {
			// 	OrderNo: "3",
			// 	buyer: "test@test.de"
			// };
			// const model = this.getView().getModel();
			// const binding = this.byId("br.numen.zui5cadrestricao::sap.suite.ui.generic.template.ListReport.view.ListReport::ZCDSEWM_C_CAD_RESTRI--responsiveTable").getBinding("items");
			// const context = binding.create(payload, /*bAtEnd*/ true, { inactive: false, expand: "" });
			// // const context2 = binding.create(payload);
			// await model.submitChanges();
			// await context.created();
			// // await context2.created();

			// const draftController = new sap.ui.generic.app.transaction.DraftController(model);
			// await draftController.activateDraftEntity(context, true);
			// binding.refresh();

			// // const operation = context.getModel().bindContext("OrdersService.draftActivate" + "(...)", context, { $$inheritExpandSelect: true });
			// // const operation2 = context2.getModel().bindContext("OrdersService.draftActivate" + "(...)", context2, { $$inheritExpandSelect: true });
			// // operation.execute("$auto", false, null, /*bReplaceWithRVC*/ true);
			// // operation2.execute("$auto", false, null, /*bReplaceWithRVC*/ true);
			// console.log(context);
		}
		// ,
        // openSpreadsheetUpload: function(oEvent) {
        // MessageToast.show("Custom handler invoked.");
        // }
    };
});