import { BarChart, Bar, XAxis, YAxis } from 'recharts';


export default function Chart(block) {
    return (
        <div>
            <BarChart width={150} height={40} data={199}>
                <Bar dataKey="uv" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div>

    );
}
