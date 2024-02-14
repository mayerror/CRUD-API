export default function isUUID(uuid: string) {
  const partsLength = [8, 4, 4, 4, 12];
  return uuid.split("-").every((item, index) => item.length === partsLength[index]);
}
