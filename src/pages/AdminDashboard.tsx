
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Orders", value: "1,234", change: "+12%", color: "text-blue-600" },
    { title: "Revenue", value: "₦45,678,900", change: "+8%", color: "text-green-600" },
    { title: "Products", value: "567", change: "+5%", color: "text-purple-600" },
    { title: "Customers", value: "2,345", change: "+15%", color: "text-yellow-600" }
  ];

  const adminActions = [
    { title: "Manage Products", description: "Add, edit, or remove products", path: "/admin/products", icon: "📦" },
    { title: "Order Management", description: "View and manage customer orders", path: "/admin/orders", icon: "📋" },
    { title: "Customer Management", description: "Manage customer accounts", path: "/admin/customers", icon: "👥" },
    { title: "Analytics", description: "View sales and performance analytics", path: "/admin/analytics", icon: "📊" },
    { title: "Content Management", description: "Manage homepage content and banners", path: "/admin/content", icon: "🎨" },
    { title: "Settings", description: "System and store settings", path: "/admin/settings", icon: "⚙️" }
  ];

  const salesData = [
    { name: 'Jan', sales: 4000, orders: 240 },
    { name: 'Feb', sales: 3000, orders: 198 },
    { name: 'Mar', sales: 2000, orders: 180 },
    { name: 'Apr', sales: 2780, orders: 208 },
    { name: 'May', sales: 1890, orders: 198 },
    { name: 'Jun', sales: 2390, orders: 250 },
  ];

  const categoryData = [
    { name: 'Skincare', value: 35, color: '#f59e0b' },
    { name: 'Makeup', value: 30, color: '#ef4444' },
    { name: 'Fragrances', value: 20, color: '#8b5cf6' },
    { name: 'Hair Care', value: 15, color: '#10b981' },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Sarah Johnson", amount: "₦45,600", status: "Completed" },
    { id: "ORD-002", customer: "Mike Chen", amount: "₦23,400", status: "Processing" },
    { id: "ORD-003", customer: "Emily Davis", amount: "₦67,800", status: "Shipped" },
    { id: "ORD-004", customer: "John Smith", amount: "₦34,200", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-white doodle-bg">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your Litzbella store</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift transition-all duration-300 border-l-4 border-l-yellow-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <p className="text-sm text-green-600">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Chart */}
          <Card className="hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Admin Actions */}
          <div className="lg:col-span-2">
            <Card className="hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {adminActions.map((action, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300 hover-lift">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{action.icon}</span>
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{action.description}</p>
                      <Button 
                        onClick={() => navigate(action.path)} 
                        className="bg-yellow-500 hover:bg-yellow-400 text-black w-full"
                      >
                        Open
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <Card className="hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm">{order.id}</p>
                      <p className="text-gray-600 text-xs">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">{order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
