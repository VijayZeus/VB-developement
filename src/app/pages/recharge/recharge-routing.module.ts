import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RechargeComponent } from "./recharge/recharge.component";

const routes: Routes = [
  {
    path: "",
    component: RechargeComponent,
    data: {
      title: "Recharge",
      header: "Recharge",
    },
  },
  {
    path: "recharge",
    component: RechargeComponent,
    data: {
      title: "Recharge",
      header: "Recharge",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeRoutingModule {}
