import { ProtectedRoute } from "@/app/components/auth/protected-route";

function AdminDashboard() {
    return (
        <ProtectedRoute allowedRoles={['admin']}>
            <div>
                AdminDashboard
            </div>
        </ProtectedRoute>
    )
}

export default AdminDashboard