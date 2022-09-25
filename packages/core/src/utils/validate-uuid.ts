const REGEX =
  /^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

export function validateUuid(uuid: string) {
  return REGEX.test(uuid);
}
