import React, { useEffect, useState, useRef } from 'react';

const SpiderCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [legPhase, setLegPhase] = useState(0);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        let lastX = 0;
        let lastY = 0;
        let timeoutId: ReturnType<typeof setTimeout>;

        const updatePosition = (e: MouseEvent) => {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;

            if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                setRotation(angle + 90);
                setIsMoving(true);
            }

            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            lastX = e.clientX;
            lastY = e.clientY;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsMoving(false), 150);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            clearTimeout(timeoutId);
        };
    }, []);

    // Walking animation loop
    useEffect(() => {
        if (isMoving) {
            const animate = () => {
                setLegPhase(prev => (prev + 0.3) % (Math.PI * 2));
                animationRef.current = requestAnimationFrame(animate);
            };
            animationRef.current = requestAnimationFrame(animate);
        } else {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        }
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isMoving]);

    if (!isVisible) return null;

    // Calculate leg positions based on phase
    const legSwing = isMoving ? Math.sin(legPhase) * 8 : 0;
    const legSwingAlt = isMoving ? Math.sin(legPhase + Math.PI) * 8 : 0;

    return (
        <div
            className="fixed pointer-events-none z-[100] will-change-transform"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                className="drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
            >
                {/* Body - Abdomen */}
                <ellipse cx="50" cy="58" rx="14" ry="18" fill="#E23636" stroke="#b91c1c" strokeWidth="1" />
                <ellipse cx="50" cy="58" rx="10" ry="14" fill="#dc2626" />
                {/* Black marking */}
                <path d="M50 50 L46 56 L50 62 L54 56 Z" fill="#0c1445" />

                {/* Body - Cephalothorax */}
                <ellipse cx="50" cy="35" rx="10" ry="12" fill="#E23636" stroke="#b91c1c" strokeWidth="1" />
                <ellipse cx="50" cy="35" rx="7" ry="9" fill="#dc2626" />

                {/* Eyes */}
                <circle cx="46" cy="30" r="3" fill="white" stroke="#333" strokeWidth="0.5" />
                <circle cx="54" cy="30" r="3" fill="white" stroke="#333" strokeWidth="0.5" />
                <circle cx="46" cy="30" r="1.5" fill="#111" />
                <circle cx="54" cy="30" r="1.5" fill="#111" />

                {/* Legs - Left Side */}
                <g style={{ transform: `translateY(${legSwing}px)`, transformOrigin: '50px 40px' }}>
                    <path d="M42 35 Q 30 25 18 20 Q 12 18 8 25" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M42 50 Q 25 50 10 55 Q 5 57 2 65" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>
                <g style={{ transform: `translateY(${legSwingAlt}px)`, transformOrigin: '50px 40px' }}>
                    <path d="M42 40 Q 28 35 15 35 Q 8 35 5 42" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M42 55 Q 28 60 15 70 Q 8 75 5 82" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Legs - Right Side */}
                <g style={{ transform: `translateY(${legSwingAlt}px)`, transformOrigin: '50px 40px' }}>
                    <path d="M58 35 Q 70 25 82 20 Q 88 18 92 25" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M58 50 Q 75 50 90 55 Q 95 57 98 65" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>
                <g style={{ transform: `translateY(${legSwing}px)`, transformOrigin: '50px 40px' }}>
                    <path d="M58 40 Q 72 35 85 35 Q 92 35 95 42" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M58 55 Q 72 60 85 70 Q 92 75 95 82" stroke="#E23636" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Web thread trailing */}
                {isMoving && (
                    <line x1="50" y1="76" x2="50" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" strokeDasharray="2 2" />
                )}
            </svg>
        </div>
    );
};

export default SpiderCursor;
