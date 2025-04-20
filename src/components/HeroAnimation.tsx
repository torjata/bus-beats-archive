
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation = ({ className = "" }: HeroAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const recordRef = useRef<HTMLDivElement>(null);
  
  // WebGL animation for waves
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 480;
    
    // Wave parameters
    const waves = [
      { amplitude: 50, frequency: 0.02, speed: 0.01, color: 'rgba(255,255,255,0.1)' },
      { amplitude: 30, frequency: 0.03, speed: 0.02, color: 'rgba(255,255,255,0.15)' },
      { amplitude: 20, frequency: 0.01, speed: 0.03, color: 'rgba(255,255,255,0.2)' },
    ];
    
    let time = 0;
    
    // Animation function
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update time
      time += 0.05;
      
      // Draw waves
      waves.forEach((wave, index) => {
        ctx.fillStyle = wave.color;
        ctx.beginPath();
        
        // Start at left side
        ctx.moveTo(0, height);
        
        // Draw wave path
        for (let x = 0; x <= width; x += 5) {
          const y = height / 2 + 
                  Math.sin(x * wave.frequency + time * wave.speed) * 
                  wave.amplitude * Math.sin(time * 0.1);
          
          // Higher waves at the center
          const centerFactor = 1 - Math.abs(x - width/2) / (width/2) * 0.5;
          ctx.lineTo(x, height - y * centerFactor - 50);
        }
        
        // Complete the path
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    // Handle window resize
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
    <div className={`relative w-full h-[480px] overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 z-0"></div>
      
      {/* Canvas for wave animations */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-10"
      ></canvas>
      
      {/* Spinning record */}
      <motion.div 
        ref={recordRef}
        className="absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56">
          {/* Record */}
          <div className="absolute inset-0 rounded-full bg-black shadow-xl">
            {/* Vinyl grooves */}
            <div className="absolute inset-2 rounded-full border border-gray-800"></div>
            <div className="absolute inset-4 rounded-full border border-gray-800"></div>
            <div className="absolute inset-8 rounded-full border border-gray-800"></div>
            <div className="absolute inset-12 rounded-full border border-gray-800"></div>
            <div className="absolute inset-16 rounded-full border border-gray-800"></div>
            
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"></div>
            
            {/* Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-xs text-white font-bold">BUS BEATS</span>
            </div>
            
            {/* Reflection */}
            <div className="absolute top-1/4 left-1/4 w-8 h-2 bg-white/20 rounded-full blur-sm transform rotate-45"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Background particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [0, Math.random() * -20],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
