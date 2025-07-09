import DashboardLayout from "@/app/components/dashboard/layout";
import MyTickets from "@/app/components/dashboard/user/my-tickets";

export default function MyTicketsPage() {
  return (
    <DashboardLayout userRole="user" userEmail="user@example.com">
      <MyTickets />
    </DashboardLayout>
  )
}
