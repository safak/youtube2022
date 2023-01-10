import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "0", Total: 10},
  { name: "2", Total: 94},
  { name: "4", Total: 65},
  { name: "6", Total: 99},
  { name: "8", Total: 80},
  { name: "10", Total: 50},
  { name: "12", Total: 100},
  { name: "14", Total: 75},
  { name: "16", Total: 34},
  { name: "18", Total: 78},
  { name: "20", Total: 85},
  { name: "22", Total: 98},
  { name: "24", Total: 64},
  { name: "26", Total: 98},
  { name: "28", Total: 75},
  { name: "30", Total: 34},
];

const D30 = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default D30;
