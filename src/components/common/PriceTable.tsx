import { InputDetail } from "../elements";

export default function PriceTable() {
  return (
    <div className="w-1/2 flex flex-col grow gap-y-3 justify-between">
      <InputDetail title="Product Price" unit="$" valueId="ProductPrice" />
      <InputDetail
        title="Taxes including VAT"
        unit="%"
        valueId="ProductTaxes"
      />
      <InputDetail title="Product Cost" unit="$" valueId="ProductCost" />
      <InputDetail title="Shipping Cost" unit="$" valueId="ShippingCost" />
      <InputDetail title="CPC Cost" unit="$" valueId="CPCCost" />
    </div>
  );
}
