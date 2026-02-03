import React, { useEffect, useState } from 'react';

const SpiderCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        let lastX = 0;
        let lastY = 0;

        const updatePosition = (e: MouseEvent) => {
            // Calculate rotation based on movement direction
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;

            if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                setRotation(angle + 90); // Add 90deg to align spider head
                setIsMoving(true);
            }

            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            lastX = e.clientX;
            lastY = e.clientY;

            // Reset moving state when cursor stops
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsMoving(false);
            }, 100);
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

    if (!isVisible) return null;

    return (
        <div
            className="fixed pointer-events-none z-[100] transition-transform duration-100 ease-out will-change-transform"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`
            }}
        >
            {/* Spider SVG */}
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-spiderman-red drop-shadow-lg filter shadow-spiderman-blue/50 ${isMoving ? 'animate-pulse' : ''}`}
            >
                <circle cx="12" cy="12" r="4" fill="#E23636" className="opacity-80" />
                <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="#0c1445" />

                {/* Legs Left */}
                <path d="M8 10L4 7" />
                <path d="M8 12L3 12" />
                <path d="M8 14L4 17" />
                <path d="M9 15L6 19" />

                {/* Legs Right */}
                <path d="M16 10L20 7" />
                <path d="M16 12L21 12" />
                <path d="M16 14L20 17" />
                <path d="M15 15L18 19" />

                {/* String (Web) - Optional visual flair */}
                <path d="M12 8L12 2" className="opacity-30" strokeDasharray="2 2" />
            </svg>
        </div>
    );
};

export default SpiderCursor;
