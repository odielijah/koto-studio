import { Swiper, SwiperSlide } from "swiper/react";

export default function LocationSwiper({ locations }) {
  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
      grabCursor
      className="mt-[60px] !overflow-visible"
    >
      {locations.map((loc, i) => (
        <SwiperSlide key={i}>
          <div className="rounded-2xl overflow-visible">
            <img
              src={loc.locationImage}
              alt={loc.locationTitle}
              className="w-[670px] object-cover"
            />
          </div>
          <p className="text-white gt-lt my-4 text-[28px]">
            {loc.locationTitle}
          </p>
          <a
            href="#"
            className="flex text-white items-center relative z-[999] gap-[4px] space-mono uppercase text-[12px]"
          >
            Open Location in Maps
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
            </svg>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
