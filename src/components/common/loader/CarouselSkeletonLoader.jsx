export default function CarouselSkeletonLoader() {
  return (
    <div className="w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[700px] bg-slate-200 flex flex-col gap-2 sm:gap-4 lg:gap-5 2xl:gap-7 justify-center pl-5 md:pl-10 xl:pl-12">
      <div className="w-3/4 h-4 md:h-5 lg:h-8 rounded-lg bg-slate-300" />
      <div className="w-1/2 h-4 md:h-5 lg:h-8 rounded-lg bg-slate-300" />
      <div className="w-1/3 h-4 md:h-5 lg:h-8 rounded-lg bg-slate-300" />
    </div>
  );
}
