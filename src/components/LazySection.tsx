import React, { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Additional delay in ms for staggered loading
    threshold?: number; // How much of the section needs to be visible (0-1)
}

const LazySection: React.FC<LazySectionProps> = ({
    children,
    className = '',
    delay = 0,
    threshold = 0.15
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Clear any pending timeout
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }

                    if (entry.isIntersecting) {
                        // Section coming into view - fade in
                        if (delay > 0) {
                            timeoutRef.current = setTimeout(() => {
                                setIsVisible(true);
                            }, delay);
                        } else {
                            setIsVisible(true);
                        }
                    } else {
                        // Section going out of view - fade out
                        setIsVisible(false);
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before fully in view
                threshold: threshold
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay, threshold]);

    return (
        <div
            ref={sectionRef}
            className={`lazy-section ${isVisible ? 'lazy-section--visible' : ''} ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
        >
            {children}
        </div>
    );
};

export default LazySection;
