import { Shipment } from "./shipment";

export class Package extends Shipment {
  shipmentId: number;
  weight: number;
  fromAdress: string;
  fromZipCode: string;
  toAdress: string;
  toZipCode: string;
  type = "package" as Shipment["type"];
}
