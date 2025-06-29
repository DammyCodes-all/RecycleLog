const AnalyticsBar = ({ title = "Total Bins", content, showImg }) => {
  return (
    <div className="flex justify-between items-center w-full rounded-md px-4 py-2 bg-green-100 border border-primary/50 shadow-sm">
      <div className="flex flex-col justify-center py-1">
        <p className="font-outfit text-lg text-primary">{title}</p>
        <p className="font-outfit text-2xl font-bold text-forest">{content}</p>
        {/* <p className="text-sm font-light">this month</p> */}
      </div>
      {showImg && <img src="trash2.png" className="size-14" alt="" />}
    </div>
  );
};
export default AnalyticsBar;
