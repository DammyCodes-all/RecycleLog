import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';
import { cn } from '../../lib/utils';

// Chart Container
export const ChartContainer = ({ children, className, ...props }) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};

// Custom Tooltip
export const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Bar Chart Component
export const BarChart = ({ 
  data, 
  className, 
  children,
  margin = { top: 20, right: 30, left: 20, bottom: 5 },
  ...props 
}) => {
  return (
    <RechartsBarChart
      data={data}
      margin={margin}
      className={cn("w-full h-full", className)}
      {...props}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis 
        dataKey="name" 
        tick={{ fontSize: 12, fill: '#666' }}
        axisLine={{ stroke: '#e0e0e0' }}
      />
      <YAxis 
        tick={{ fontSize: 12, fill: '#666' }}
        axisLine={{ stroke: '#e0e0e0' }}
      />
      <Tooltip content={<ChartTooltip />} />
      {children}
    </RechartsBarChart>
  );
};

// Bar Component
export const ChartBar = ({ dataKey, fill = "#10b981", radius = 4, ...props }) => {
  return <Bar dataKey={dataKey} fill={fill} radius={[radius, radius, 0, 0]} {...props} />;
};