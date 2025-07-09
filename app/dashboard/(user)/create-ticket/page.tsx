import CreateTicket from "@/app/components/dashboard/user/create-ticket";
import DashboardLayout from "@/app/components/dashboard/layout";

export default function CreateTicketPage() {
    return (
        <DashboardLayout userRole="user" userEmail="user@example.com">
            <CreateTicket />
        </DashboardLayout>
    )
}
