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
  { name: "0", Total: 10220},
  { name: "2", Total: 9445},
  { name: "4", Total: 6545},
  { name: "6", Total: 9979},
  { name: "8", Total: 8045},
  { name: "10", Total: 5078},
  { name: "12", Total: 10020},
  { name: "14", Total: 7578},
  { name: "16", Total: 3478},
  { name: "18", Total: 7845},
  { name: "20", Total: 8569},
  { name: "22", Total: 9812},
  { name: "24", Total: 6478},
  { name: "26", Total: 9812},
  { name: "28", Total: 7578},
  { name: "30", Total: 3436},
];

const DAU = ({ aspect, title }) => {
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

export default DAU;
