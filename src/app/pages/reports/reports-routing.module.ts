import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransactionReportComponent } from "./transaction-report/transaction-report.component";
import { RefundPaymentTransactionReportComponent } from "./refund-payment-transaction/refund-payment-transaction.component";
import { RetailerPaymentTransactionReportComponent } from "./retailer-payment-transaction/retailer-payment-transaction.component";
import { PayoutTransactionReportComponent } from "./payout-transaction-report/payout-transaction-report.component";
import { PayoutRefundReportComponent } from "./payout-refund-report/payout-refund-report.component";
import { retailerTopUpAndPgReportComponent } from "./retailer-top-up-PG-report/retailer-top-up-PG-report.component";

const routes: Routes = [
  {
    path: "",
    component: TransactionReportComponent,
    data: {
      title: "Account Statement",
      header: "Account Statement",
    },
  },
  {
    path: "transaction-report",
    component: TransactionReportComponent,
    data: {
      title: "Account Statement",
      header: "Account Statement",
    },
  },
  {
    path: "refund-payment-transaction-report",
    component: RefundPaymentTransactionReportComponent,
    data: {
      title: "Refund Payment Transaction Report",
      header: "Refund Payment Transaction Report",
    },
  },
  {
    path: "retailer-payment-transaction-report",
    component: RetailerPaymentTransactionReportComponent,
    data: {
      title: "Retailer Payment Transaction Report",
      header: "Retailer Payment Transaction Report",
    },
  },
  {
    path: "payout-transaction-report",
    component: PayoutTransactionReportComponent,
    data: {
      title: "Payout Transaction Report",
      header: "Payout Transaction Report",
    },
  },
  {
    path: "payout-refund-report",
    component: PayoutRefundReportComponent,
    data: {
      title: "Payout Refund Report",
      header: "Payout Refund Report",
    },
  },
  {
    path: "retailer-topup-PG-report",
    component: retailerTopUpAndPgReportComponent,
    data: {
      title: "Retailer Top up And PG report",
      header: "Retailer Top up And PG report",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
