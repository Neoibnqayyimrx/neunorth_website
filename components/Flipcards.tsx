"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FlipCardItem {
  /** Unique identifier for the card */
  id: number | string;
  /** Path or URL for the front image */
  frontImage: string;
  /** Alt text for the front image */
  altText: string;
  /** Card title shown on both front and back */
  title: string;
  /** Array of paragraph strings shown on the back */
  description: string[];

   action?: React.ReactNode;
}

export interface FlipCardsProps {
  /** Array of card data to render */
  cards: FlipCardItem[];
  /**
   * Tailwind column classes for the grid.
   * Defaults to "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
   */
  gridCols?: string;
  /** Card height. Defaults to "450px" */
  cardHeight?: string;
  /** Extra className applied to the outer <section> */
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

const FlipCards: React.FC<FlipCardsProps> = ({
  cards,
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  cardHeight = "450px",
  className = "",
}) => {
  const [flippedCards, setFlippedCards] = useState<(number | string)[]>([]);

  const toggleFlip = (id: number | string) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <section className={`bg-background py-20 sm:py-24 overflow-hidden ${className}`}>
      <div className="container">
        <div className={`grid ${gridCols} gap-8 max-w-lg sm:max-w-none mx-auto`}>
          {cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id);

            return (
              <div
                key={card.id}
                className="select-none cursor-pointer"
                style={{ perspective: "1200px", height: cardHeight }}
                onClick={() => toggleFlip(card.id)}
              >
                {/* Flip inner */}
                <div
                  className="relative w-full h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* ── FRONT ──────────────────────────────────────────── */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col glass card-shadow border border-border-dark hover:border-primary transition-colors duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Image */}
                    <div className="relative h-[55%] overflow-hidden group">
                      <img
                        src={card.frontImage}
                        alt={card.altText}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-7 bg-dark-200">
                      <h3 className="!text-[1.15rem] text-foreground leading-snug">
                        {card.title}
                      </h3>

                      <div className="flex justify-between">
                        {card.action ?? <span />}
                        <button
                          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-foreground border border-border-dark hover:bg-primary hover:border-primary hover:text-dark-100 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(card.id);
                          }}
                          aria-label="Expand card"
                        >
                          <FaPlus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ── BACK ───────────────────────────────────────────── */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-8 glass card-shadow border border-primary select-text"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    onClick={() => toggleFlip(card.id)}
                  >
                    <div className="flex flex-col gap-5">
                      <h3 className="!text-xl text-foreground leading-snug">
                        {card.title}
                      </h3>

                      <div className="flex flex-col gap-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-white/30">
                        {card.description.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-light-100 text-base leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      {card.action ?? <span />}
                      <button
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-foreground border border-white/20 hover:bg-primary hover:border-primary hover:text-dark-100 active:scale-95 transition-all duration-300 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(card.id);
                        }}
                        aria-label="Collapse card"
                      >
                        <FaMinus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;