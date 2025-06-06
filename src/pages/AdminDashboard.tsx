
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Orders", value: "1,234", change: "+12%" },
    { title: "Revenue", value: "$45,678", change: "+8%" },
    { title: "Products", value: "567", change: "+5%" },
    { title: "Customers", value: "2,345", change: "+15%" }
  ];

  const adminActions = [
    { title: "Manage Products", description: "Add, edit, or remove products", path: "/admin/products" },
    { title: "Order Management", description: "View and manage customer orders", path: "/admin/orders" },
    { title: "Customer Management", description: "Manage customer accounts", path: "/admin/customers" },
    { title: "Analytics", description: "View sales and performance analytics", path: "/admin/analytics" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your Litzbella store</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-green-600">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {adminActions.map((action, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <Button onClick={() => navigate(action.path)} className="bg-yellow-600 hover:bg-yellow-700">
                  Open
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
