
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search, Eye, Download } from "lucide-react";

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    { id: "ORD-001", customer: "Sarah Johnson", date: "2024-01-15", total: "₦45,600", status: "Completed", items: 3 },
    { id: "ORD-002", customer: "Mike Chen", date: "2024-01-14", total: "₦23,400", status: "Processing", items: 2 },
    { id: "ORD-003", customer: "Emily Davis", date: "2024-01-14", total: "₦67,800", status: "Shipped", items: 5 },
    { id: "ORD-004", customer: "John Smith", date: "2024-01-13", total: "₦34,200", status: "Pending", items: 2 },
    { id: "ORD-005", customer: "Lisa Wang", date: "2024-01-13", total: "₦56,700", status: "Completed", items: 4 },
  ];

  return (
    <div className="min-h-screen bg-white doodle-bg">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
          <p className="text-gray-600">View and manage customer orders</p>
        </div>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Orders</CardTitle>
              <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order ID</th>
                    <th className="text-left py-3 px-4">Customer</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Items</th>
                    <th className="text-left py-3 px-4">Total</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4">{order.items}</td>
                      <td className="py-3 px-4 font-semibold">{order.total}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminOrders;
