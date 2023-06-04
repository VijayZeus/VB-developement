import {
  Component,
  HostBinding,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

interface IBeneficiaryForm {
  payee_name?: string;
  mobile_no?: string;
  ifsc_code?: string;
  account_number?: string;
  bankType?: any;
  bank_ref_id?: any;
}
@Component({
  selector: "app-bill-payment",
  templateUrl: "./bill-payment.component.html",
  styleUrls: ["./bill-payment.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BillPaymentComponent implements OnInit {

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
