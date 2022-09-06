sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {sap.ui.model.Filter} Filter
     * @param {sap.ui.model.FilterOperator} FilterOperator
     */

    function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
        return Controller.extend("dtt.SAPUI5.controller.InvoicesList",{
            onInit:function () {
                var oViewModel = new JSONModel({
                    usd:"USD",
                    mxn:"MXN"
                });this.getView().setModel(oViewModel,"Currency")             
            },
            formatter:InvoicesFormatter,
            onFilterInvoices:function (oEvent) {
                const aFilter=[];
                const sQuery=oEvent.getParameter("query");
                if(sQuery){
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery)
                    );
                }
                const oList=this.getView().byId("_IDGenList1");
                const oBinding=oList.getBinding("items");
                oBinding.filter(aFilter);
            }
        })

    });