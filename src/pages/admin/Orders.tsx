
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";
import { 
  Eye, 
  Edit, 
  ShoppingBag,
  Home,
  Settings
} from "lucide-react";

const AdminOrders = () => {
  const navigate = useNavigate();

  const orders = [
    { id: "ORD-001", customer: "Sarah Johnson", amount: "$125.00", status: "Processing", date: "2024-01-15" },
    { id: "ORD-002", customer: "Emily Davis", amount: "$85.00", status: "Shipped", date: "2024-01-14" },
    { id: "ORD-003", customer: "Jessica Brown", amount: "$200.00", status: "Delivered", date: "2024-01-13" },
    { id: "ORD-004", customer: "Amanda Wilson", amount: "$45.00", status: "Pending", date: "2024-01-12" },
    { id: "ORD-005", customer: "Michelle Taylor", amount: "$175.00", status: "Processing", date: "2024-01-11" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Card className="mb-8 bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
          <CardContent className="p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-2 hover:text-primary transition-colors text-gray-700 dark:text-gray-300">
                    <Home className="w-4 h-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin" className="flex items-center gap-2 hover:text-primary transition-colors text-gray-700 dark:text-gray-300">
                    <Settings className="w-4 h-4" />
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-primary">Orders</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent mb-2">
            Order Management
          </h1>
          <p className="text-gray-700 dark:text-gray-300">Track and manage customer orders</p>
        </div>

        {/* Orders Table */}
        <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <ShoppingBag className="w-5 h-5" />
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-700 dark:text-gray-300">Order ID</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Customer</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Amount</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Date</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-orange-50/50 dark:hover:bg-gray-700/50">
                    <TableCell className="font-medium text-gray-900 dark:text-white">{order.id}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{order.customer}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{order.amount}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300'
                      }`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{order.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-orange-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-orange-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminOrders;
