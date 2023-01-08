// format currency used in StoreItem component
// undefined -> printout based on location
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PHP",
  style: "currency",
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
