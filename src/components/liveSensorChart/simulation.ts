// Deterministic demo signals: the compact and expanded charts share the same clock.
export function sensorSample(seconds: number) {
  const pulse = Math.sin(seconds * Math.PI * 2);
  const ripple = Math.sin(seconds * Math.PI * 4 + 0.4);
  const drift = Math.sin(seconds * 0.7);
  return {
    flow: 4.5 + 0.32 * pulse + 0.08 * ripple + 0.06 * drift,
    left: 104 + 3.2 * pulse + 0.7 * ripple + 0.6 * drift,
    right: 96 + 2.6 * pulse + 0.5 * ripple + 0.5 * drift,
  };
}
