import { discountPercent, formatINR, type Price } from "@/data/pricing";

type Props = {
  price: Price;
  label?: string;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
};

export function PriceTag({ price, label, size = "md", tone = "light" }: Props) {
  const off = discountPercent(price);
  return (
    <div className={`price-tag price-tag--${size} price-tag--${tone}`}>
      {label && <span className="price-tag-label">{label}</span>}
      <div className="price-tag-row">
        <s className="price-tag-original" aria-label={`Original price ${formatINR(price.original)}`}>
          {formatINR(price.original)}
        </s>
        {off > 0 && <span className="price-tag-off">{off}% OFF</span>}
      </div>
      <span className="price-tag-final" aria-label={`Offer price ${formatINR(price.price)}`}>
        {formatINR(price.price)}
      </span>
    </div>
  );
}
