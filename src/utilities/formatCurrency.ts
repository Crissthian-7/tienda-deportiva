const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: "PEN",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
