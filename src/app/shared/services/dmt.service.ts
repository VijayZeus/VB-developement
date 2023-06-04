import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { baseApiUrl } from "../../providers/api/api";
import { ResponseInterface } from "../interface/auth.interface";

@Injectable({
  providedIn: "root",
})
export class DmtService extends baseApiUrl {
  //Only for demo purpose
  authenticated = true;

  constructor(http: HttpClient) {
    super(http);
  }

  private URL: string = this.getDmtBaseUrl();

  getCustomerApi(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/GetCustomerInfo",
      params
    );
  }

  getCustomerApiPayOut(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/GetCustomerInfo_payout",
      params
    );
  }

  getBeneficiaryApi(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/GetAllPayee",
      params
    );
  }
  getBeneficiaryApiPayout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/GetAllPayee_payout",
      params
    );
  }

  addCustomer(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/RegisterCustomer",
      params
    );
  }
  addCustomerPayOut(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/RegisterCustomer_payout",
      params
    );
  }
  validateCustomerRegistrationOtp(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/ValidateRegisterCustomerOTP",
      params
    );
  }

  validateCustomerRegistrationOtpPayout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/ValidateRegisterCustomerOTP_payout",
      params
    );
  }

  resendOtpCRegistration(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/ResendOTP",
      params
    );
  }
  resendOtpCRegistrationPayOut(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/ResendOTP_payout",
      params
    );
  }

  addPayee(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/AddPayee",
      params
    );
  }
  addPayeePayout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/AddPayee_payout",
      params
    );
  }

  payeeValidate(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/BeneValidate",
      params
    );
  }

  payeeValidatePayout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/BeneValidate_payout",
      params
    );
  }

  moneyTransferTransaction(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/Transaction",
      params
    );
  }

  payoutTransaction(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/FundTransfer",
      params
    );
  }

  transactionReport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/TransactionLedgerReport",
      params
    );
  }

  refundPaymenttransactionReport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/GetRefundPaymentTransactionReport",
      params
    );
  }

  retailerPaymentReport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/GetRetailerPaymentTransactionReport",
      params
    );
  }

  payoutTransactionReport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/GetRetailerPaymentTransactionReportPayOut",
      params
    );
  }

  payoutRefundReport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/GetRefundPaymentTransactionReportPayout",
      params
    );
  }

  refundOtp(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/Refund",
      params
    );
  }

  deleteBeneOtp(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/SendOTPForPayeeDeletion",
      params
    );
  }
  deleteBeneOtpPayout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/SendOTPForPayeeDeletion_payout",
      params
    );
  }

  deleteBene(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/dmt/DeletePayee",
      params
    );
  }

  deleteBenePayout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/DeletePayee_payout",
      params
    );
  }

  getTopupInfo(): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/common/GetTopupInfo",
      ""
    );
  }

  getProfileSupport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/common/GetSupportInfo?AgentRefID=" + params.AgentRefID,
      ""
    );
  }

  addPgLink(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PG/CreateOrder",
      params
    );
  }

  retailerTopUpAndPgReport(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/GetRetailerTopupReport",
      params
    );
  }

  getScrollMessage(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/reports/GetScrollMessage",
      params
    );
  }
  getPin_payout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/GetPin_payout",
      params
    );
  }
  updatePin_payout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/UpdatePin_payout",
      params
    );
  }
  verifyPin_payout(params: any): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      this.URL + "/api/PayOut/VerifyPin_payout",
      params
    );
  }
}
