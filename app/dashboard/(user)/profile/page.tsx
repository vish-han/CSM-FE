import Profile from "@/app/components/dashboard/common/profile";
import DashboardLayout from "@/app/components/dashboard/layout";

export default function ProfilePage() {
    return (
        <DashboardLayout userRole="user" userEmail="user@example.com">
            <Profile userEmail="user@example.com" userRole="user" />
        </DashboardLayout>
    )
}
