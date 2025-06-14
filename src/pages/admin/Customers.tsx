
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
  Users,
  Home,
  Settings,
  Mail,
  Phone
} from "lucide-react";

const AdminCustomers = () => {
  const navigate = useNavigate();

  const customers = [
    { id: 1, name: "Sarah Johnson", email: "sarah@email.com", phone: "+234-801-234-5678", orders: 8, totalSpent: "$425.00", status: "Active" },
    { id: 2, name: "Emily Davis", email: "emily@email.com", phone: "+234-802-345-6789", orders: 3, totalSpent: "$185.00", status: "Active" },
    { id: 3, name: "Jessica Brown", email: "jessica@email.com", phone: "+234-803-456-7890", orders: 12, totalSpent: "$680.00", status: "VIP" },
    { id: 4, name: "Amanda Wilson", email: "amanda@email.com", phone: "+234-804-567-8901", orders: 1, totalSpent: "$45.00", status: "New" },
    { id: 5, name: "Michelle Taylor", email: "michelle@email.com", phone: "+234-805-678-9012", orders: 5, totalSpent: "$275.00", status: "Active" },
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
                  <BreadcrumbPage className="font-semibold text-primary">Customers</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent mb-2">
            Customer Management
          </h1>
          <p className="text-gray-700 dark:text-gray-300">Manage customer accounts and relationships</p>
        </div>

        {/* Customers Table */}
        <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Users className="w-5 h-5" />
              All Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-700 dark:text-gray-300">Customer</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Contact</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Orders</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Total Spent</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-orange-50/50 dark:hover:bg-gray-700/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{customer.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {customer.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-900 dark:text-white flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{customer.orders}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{customer.totalSpent}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        customer.status === 'VIP' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                        customer.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {customer.status}
                      </span>
                    </TableCell>
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

export default AdminCustomers;
