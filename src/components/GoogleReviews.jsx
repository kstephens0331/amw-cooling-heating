import React from "react";
import { FaStar, FaQuoteLeft, FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import reviewsData from "../data/googleReviews.json";

// Self-owned native Google reviews section for AMW Cooling & Heating.
// Renders from src/data/googleReviews.json as a revolving carousel of the
// 5-star reviews. No third-party widget, no script, no iframe, nothing that
// can lapse. Refresh the data by re-running scripts/fetch-google-reviews.js
// (Google Places API). The carousel scales to however many reviews are in the
// JSON, so it works with 5 now and the full set later without a change here.

const LEAVE_REVIEW_URL = "https://g.page/r/CS99Sm7SPdvPEBM/review";

// AMW brand blue drives the Swiper arrows and pagination dots.
const SWIPER_THEME = { "--swiper-theme-color": "#1e3a8a" };

function StarRow({ count = 5, className = "text-yellow-400" }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < count ? className : "text-gray-300"}`}
        aria-hidden="true"
      />
    );
  }
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {stars}
    </div>
  );
}

function initialsBadge(name) {
  const parts = (name || "").trim().split(/\s+/);
  const first = parts[0] ? parts[0][0] : "?";
  const second = parts[1] ? parts[1][0] : "";
  return (first + second).toUpperCase();
}

// Alternate the left accent border between AMW blue and red for visual rhythm.
const ACCENTS = ["border-blue-600", "border-red-500"];

function ReviewCard({ review, index }) {
  return (
    <article
      className={`bg-white rounded-xl shadow-lg h-full flex flex-col border-l-4 ${
        ACCENTS[index % ACCENTS.length]
      }`}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <StarRow count={review.rating || 5} />
          <FaQuoteLeft className="text-blue-600 text-2xl" aria-hidden="true" />
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1 line-clamp-[10]">
          {review.text}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-900 text-white text-xs font-bold flex-shrink-0">
            {initialsBadge(review.name)}
          </span>
          <div>
            <p className="font-bold text-blue-900 text-base leading-tight">{review.name}</p>
            <p className="text-xs text-red-500 font-medium flex items-center gap-1">
              <FaGoogle className="w-3 h-3" aria-hidden="true" />
              Google Review{review.date ? ` · ${review.date}` : ""}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function GoogleReviews() {
  const { averageRating, totalReviews, reviews, profileUrl } = reviewsData;
  const avg =
    typeof averageRating === "number" ? averageRating.toFixed(1) : averageRating;
  const roundedAvg = Math.round(Number(averageRating) || 5);
  const allReviewsUrl = profileUrl || LEAVE_REVIEW_URL;

  // Show only 5-star reviews, revolving. Fall back to all if none are tagged.
  const fiveStar = (reviews || []).filter((r) => Number(r.rating) === 5);
  const shown = fiveStar.length ? fiveStar : reviews || [];
  // Loop needs enough slides to fill the widest view; disable it below that.
  const canLoop = shown.length > 3;

  return (
    <div>
      {/* Aggregate header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-blue-900 text-white rounded-full px-5 py-2.5 shadow">
          <FaGoogle className="w-5 h-5" aria-hidden="true" />
          <span className="text-2xl font-black leading-none">{avg}</span>
          <StarRow count={roundedAvg} />
          <span className="text-sm text-blue-100">
            based on {totalReviews} Google reviews
          </span>
        </div>
      </div>

      {/* Revolving review carousel */}
      <div className="px-2 md:px-8" style={SWIPER_THEME}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={canLoop}
          autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation
          grabCursor
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {shown.map((review, index) => (
            <SwiperSlide key={`${review.name}-${index}`} className="h-auto pb-2">
              <ReviewCard review={review} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Link out to Google */}
      <div className="text-center mt-4">
        <a
          href={allReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          <FaGoogle className="w-4 h-4" aria-hidden="true" />
          See all reviews on Google
        </a>
      </div>
    </div>
  );
}
