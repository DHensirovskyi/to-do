import { ClipboardCheck } from 'lucide-react';

type DonutChartProps = {
  percentage: number;
  color: string;
  bgColor: string;
};

export default function TaskStatus() {
  const stats = [
    { label: 'Completed', percentage: 84, color: '#10B981', bgColor: '#E5E7EB' },
    { label: 'In Progress', percentage: 46, color: '#3B82F6', bgColor: '#E5E7EB' },
    { label: 'Not Started', percentage: 13, color: '#EF4444', bgColor: '#E5E7EB' }
  ];

  const DonutChart = ({ percentage, color, bgColor }: DonutChartProps) => {
    const radius = 35;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg width="100%" height="100%" viewBox="0 0 80 80" className="transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={normalizedRadius}
            stroke={bgColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r={normalizedRadius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm sm:text-lg font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section className="rounded-[8px] p-3.5 shadow-xl flex flex-col gap-5 bg-[#fafbfd]">
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <ClipboardCheck className="w-5 h-5 text-[#A1A3AB]" strokeWidth={1.5} />
            <p className="text-[0.875rem] font-medium text-black">Task Status</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around items-center gap-3 sm:gap-4 px-2">
        {stats.map((stat, index) => (
          <DonutChart
            key={index}
            percentage={stat.percentage}
            color={stat.color}
            bgColor={stat.bgColor}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-1">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: stat.color }}
            />
            <span className="text-gray-700 font-medium text-xs sm:text-sm whitespace-nowrap">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}