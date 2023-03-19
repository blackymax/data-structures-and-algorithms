import { Shipment } from "./shipments/shipment";
import { AirWestShipper } from "./shippers/AirWestShipper";
import { ChicagoSprintShipper } from "./shippers/ChicagoSprintShipper";
import { PacificParcelShipper } from "./shippers/PacificParcelShipper";

export class ShipperFactory {
  public getInstance(shipment: Shipment) {
    switch (shipment.fromZipCode[0]) {
      case "4":
      case "5":
      case "6":
        return new ChicagoSprintShipper(shipment);
      case "7":
      case "8":
      case "9":
        return new PacificParcelShipper(shipment);
      default:
        return new AirWestShipper(shipment);
    }
  }
}

export default new ShipperFactory();
