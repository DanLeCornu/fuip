export const generateDeviceId = (deviceId: string, setDeviceId: (deviceId: string) => void) => {
  if (deviceId) return deviceId
  const generatedDeviceId = Math.floor(Math.random() * 10000000000).toString()
  setDeviceId(generatedDeviceId)
  return generatedDeviceId
}
