import DashboardLayout from "../../components/dashboard/layout";
import TicketAnalytics from "../../components/dashboard/common/ticket-analytics";

export default function Dashboard() {
    return (
        <DashboardLayout userRole="user" userEmail="user@example.com">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                    <p className="text-gray-400">Welcome back! Here's your ticket analytics overview.</p>
                </div>

                <TicketAnalytics />
            </div>
        </DashboardLayout>
    )
}
