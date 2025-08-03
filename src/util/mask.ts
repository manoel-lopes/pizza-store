export function maskPhoneNumber(value: string) {
  if (!value) return ''
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  return value
}

export function removeMaskPhoneNumber(value: string) {
  if (!value) return ''
  return value.replace(/\D/g, '')
}
