
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation = ({ className = "" }: HeroAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // ปรับแผ่นเสียงให้อยู่กึ่งกลางจอ
  // ใช้ canvas เป็นเอฟเฟกต์คลื่นจางด้านหลัง

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 480;

    // คลื่นจาง/เลเยอร์
    const waves = [
      { amplitude: 38, frequency: 0.012, speed: 0.008, color: 'rgba(255,255,255,0.09)' },
      { amplitude: 26, frequency: 0.016, speed: 0.014, color: 'rgba(255,255,255,0.12)' },
      { amplitude: 17, frequency: 0.009, speed: 0.021, color: 'rgba(255,255,255,0.18)' },
    ];

    let time = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      time += 0.05;
      // Draw waves
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 5) {
          const y = height / 2 + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude * Math.sin(time * 0.10 + index);
          const centerFactor = 1 - Math.abs(x - width/2) / (width/2) * 0.5;
          ctx.lineTo(x, height - y * centerFactor - 40);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 480;
    };

    window.addEventListener('resize', handleResize);
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative w-full h-[480px] overflow-hidden flex items-center justify-center ${className}`}>
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 z-0" />
      {/* คลื่น (canvas) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />
      {/* Spinning record - จัดกลางจอ */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mix-blend-lighten pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-56 h-56 md:w-64 md:h-64 opacity-50">
          {/* Record */}
          <div className="absolute inset-0 rounded-full bg-black/80 shadow-2xl">
            {/* Vinyl grooves */}
            <div className="absolute inset-2 rounded-full border border-gray-800/80"></div>
            <div className="absolute inset-6 rounded-full border border-gray-800/70"></div>
            <div className="absolute inset-10 rounded-full border border-gray-800/60"></div>
            <div className="absolute inset-14 rounded-full border border-gray-800/40"></div>
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/90"></div>
            {/* Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-xs text-white font-bold">BUS BEATS</span>
            </div>
            {/* Reflection */}
            <div className="absolute top-1/4 left-1/4 w-10 h-2 bg-white/30 rounded-full blur-sm rotate-45"></div>
          </div>
        </div>
      </motion.div>
      {/* Optional: floating particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.13,
            }}
            animate={{
              y: [0, Math.random() * -28],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
