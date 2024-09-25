import { useState, useEffect, useRef } from 'react';
import InfoBox from './InfoBox';

const ScrollableInfoSection = () => {
    const infoBoxes = [
        { label: "Total Wins", value: "120" },
        { label: "Total Losses", value: "50" },
        { label: "Jackpot Wins", value: "5" },
        { label: "Games Played", value: "300" },
        { label: "Total Deposits", value: "$10,000" },
        { label: "Total Withdrawals", value: "$8,000" },
        { label: "Current Balance", value: "$2,000" },
        { label: "Highest Bet", value: "$500" }
    ];

    const [visibleCount, setVisibleCount] = useState(4);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const scrollPosition = container.scrollLeft + container.clientWidth;
            const scrollWidth = container.scrollWidth;

            if (scrollPosition >= scrollWidth) {
                setVisibleCount((prevCount) => Math.min(prevCount + 4, infoBoxes.length));
            }
        }
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeft.current = containerRef.current.scrollLeft;
        containerRef.current.style.cursor = "grabbing"; // Change cursor on drag
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Adjust scroll speed here
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        containerRef.current.style.cursor = "grab"; // Reset cursor
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mouseleave', handleMouseUp);
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mouseleave', handleMouseUp);
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Statistics</h3>

            {/* Scrollable container */}
            <div
                ref={containerRef}
                className="relative w-full overflow-x-scroll flex scrollbar-hide"
                style={{
                    scrollSnapType: "x mandatory",
                    WebkitMaskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                    maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                    cursor: "grab", // Set default cursor for grab
                }}
            >
                {/* InfoBoxes */}
                <div className="flex">
                    {infoBoxes.slice(0, visibleCount).map((info, index) => (
                        <div key={index} className="scroll-snap-align-center flex-none">
                            <InfoBox label={info.label} value={info.value} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom styling to hide the scrollbar */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;  /* Safari and Chrome */
                }
                .scroll-snap-align-center {
                    scroll-snap-align: center;
                }
            `}</style>
        </section>
    );
};

export default ScrollableInfoSection;
