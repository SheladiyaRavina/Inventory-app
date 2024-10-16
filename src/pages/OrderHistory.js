const dummyOrders = [
  { id: 1, date: '2024-10-01', status: 'Delivered', total: 120 },
  { id: 2, date: '2024-10-05', status: 'Processing', total: 60 },
  { id: 3, date: '2024-10-10', status: 'Cancelled', total: 80 },
  { id: 4, date: '2024-10-12', status: 'Delivered', total: 45 },
  { id: 5, date: '2024-10-15', status: 'Processing', total: 200 },
  { id: 6, date: '2024-10-16', status: 'Delivered', total: 150 },
  { id: 7, date: '2024-10-17', status: 'Pending', total: 90 },
  { id: 8, date: '2024-10-18', status: 'Delivered', total: 300 },
  { id: 9, date: '2024-10-20', status: 'Processing', total: 75 },
  { id: 10, date: '2024-10-22', status: 'Delivered', total: 210 },
];

function OrderHistory() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Order History</h2>
      <ul className="space-y-4">
        {dummyOrders.map((order) => (
          <li key={order.id} className="p-4 bg-white shadow rounded-lg border border-gray-200">
            <div className="flex justify-between">
              <p className="font-semibold">Order Date:</p>
              <p>{order.date}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Status:</p>
              <p className={`font-medium ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Processing' ? 'text-yellow-600' : 'text-red-600'}`}>
                {order.status}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total:</p>
              <p className="font-bold text-lg">${order.total}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;
