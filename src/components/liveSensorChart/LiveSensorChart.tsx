import { useEffect, useRef, useState } from 'react';
import { sensorSample } from './simulation';
import './LiveSensorChart.css';

interface Props {
  kind: 'flow' | 'pressure';
  startedAt: number;
  expanded?: boolean;
}

const WINDOW_SECONDS = 8;
const SAMPLE_SECONDS = 0.04;

export function LiveSensorChart({ kind, startedAt, expanded = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reading, setReading] = useState(() => sensorSample(0));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previousDraw = -Infinity;
    let previousReadout = -Infinity;
    let width = 0;
    let height = 0;
    const styles = getComputedStyle(canvas);
    const color = (name: string, fallback: string) =>
      styles.getPropertyValue(`--mantine-color-${name}`).trim() || fallback;
    const blue = styles.getPropertyValue('--sensor-blue').trim() || '#153e75';
    const red = color('ubhRed-6', '#b5302f');
    const grid = color('ubhNeutral-3', '#dee2e6');
    const axis = '#000';

    function draw(now: number) {
      if (!ctx || width <= 0 || height <= 0) return;
      const elapsed = Math.max(0, (now - startedAt) / 1000);
      const end = Math.max(WINDOW_SECONDS, elapsed);
      const start = end - WINDOW_SECONDS;
      const left = 64;
      const top = 12;
      const plotWidth = width - left - 12;
      const plotHeight = height - top - 48;
      if (plotWidth <= 0 || plotHeight <= 0) return;
      const min = kind === 'flow' ? 4 : 90;
      const max = kind === 'flow' ? 5 : 110;
      const x = (seconds: number) => left + ((seconds - start) / WINDOW_SECONDS) * plotWidth;
      const y = (value: number) => top + (1 - (value - min) / (max - min)) * plotHeight;

      ctx.clearRect(0, 0, width, height);
      ctx.font = '11px Inter, system-ui, sans-serif';
      ctx.fillStyle = axis;
      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      for (let i = 0; i <= 4; i++) {
        const value = min + ((max - min) * i) / 4;
        const py = y(value);
        ctx.fillText(kind === 'flow' ? value.toFixed(2) : String(value), left - 8, py);
        ctx.beginPath();
        ctx.moveTo(left, py);
        ctx.lineTo(left + plotWidth, py);
        ctx.stroke();
      }
      ctx.textBaseline = 'top';
      for (let seconds = Math.ceil(start / 2) * 2; seconds <= end; seconds += 2) {
        const px = x(seconds);
        ctx.beginPath();
        ctx.moveTo(px, top);
        ctx.lineTo(px, top + plotHeight);
        ctx.stroke();
        ctx.textAlign = 'center';
        const label = `${seconds}s`;
        const halfLabel = ctx.measureText(label).width / 2;
        ctx.fillText(
          label,
          Math.min(width - halfLabel, Math.max(left + halfLabel, px)),
          top + plotHeight + 10,
        );
      }
      ctx.setLineDash([]);
      ctx.strokeStyle = axis;
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(left, top + plotHeight);
      ctx.lineTo(left + plotWidth, top + plotHeight);
      ctx.stroke();

      ctx.save();
      ctx.font = '12px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Time (s)', left + plotWidth / 2, height - 8);
      ctx.translate(12, top + plotHeight / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(kind === 'flow' ? 'Flow rate (L/min)' : 'Pressure (mmHg)', 0, 0);
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.rect(left, top, plotWidth, plotHeight);
      ctx.clip();
      const traces =
        kind === 'flow'
          ? [{ key: 'flow' as const, color: blue }]
          : [
              { key: 'left' as const, color: blue },
              { key: 'right' as const, color: red },
            ];
      for (const trace of traces) {
        ctx.strokeStyle = trace.color;
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        let first = true;
        // Fixed sample times preserve the waveform as the window slides left.
        const firstIndex = Math.max(0, Math.floor(start / SAMPLE_SECONDS));
        for (let i = firstIndex; i * SAMPLE_SECONDS <= elapsed; i++) {
          const seconds = i * SAMPLE_SECONDS;
          const value = sensorSample(seconds)[trace.key];
          if (first) ctx.moveTo(x(seconds), y(value));
          else ctx.lineTo(x(seconds), y(value));
          first = false;
        }
        ctx.lineTo(x(elapsed), y(sensorSample(elapsed)[trace.key]));
        ctx.stroke();
      }
      ctx.restore();
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };
    const animate = (now: number) => {
      if (!document.hidden) {
        if (now - previousDraw >= (reducedMotion.matches ? 500 : 1000 / 60)) {
          draw(now);
          previousDraw = now;
        }
        if (now - previousReadout >= 500) {
          setReading(sensorSample(Math.max(0, (now - startedAt) / 1000)));
          previousReadout = now;
        }
      }
      frame = requestAnimationFrame(animate);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [kind, startedAt]);

  return (
    <div className={`live-sensor-chart${expanded ? ' live-sensor-chart-expanded' : ''}`}>
      <div className="sensor-readout-row">
        <div className="sensor-readouts">
          {kind === 'flow' ? (
            <span className="sensor-reading sensor-reading-blue">
              {reading.flow.toFixed(2)} <small>L/min</small>
            </span>
          ) : (
            <>
              <span className="sensor-reading sensor-reading-blue">
                <small>L</small> {reading.left.toFixed(1)}
              </span>
              <span className="sensor-reading sensor-reading-red">
                <small>R</small> {reading.right.toFixed(1)} <small>mmHg</small>
              </span>
            </>
          )}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="sensor-trace-canvas"
        role="img"
        aria-label={
          kind === 'flow'
            ? 'Simulated flow rate from 4 to 5 litres per minute over an eight-second window.'
            : 'Simulated left and right pressure from 90 to 110 mmHg over an eight-second window. Left pressure stays above right.'
        }
      />
      {kind === 'pressure' && (
        <div className="sensor-trace-legend">
          <span className="sensor-reading-blue">Left</span>
          <span className="sensor-reading-red">Right</span>
        </div>
      )}
    </div>
  );
}
