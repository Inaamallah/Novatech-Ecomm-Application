import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/Auth.context"
import { User, Mail, Shield, ShoppingBag, Package, Settings, Loader2 } from "lucide-react"

const Dashboard = () => {
    const { userdata, loading } = useContext(AuthContext)

    const profile = userdata ?? { fullName: "", Email: "", Role: "" }

    const initials = profile.fullName
        ? profile.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
        : "?"

    const infoCards = [
        {
            icon: User,
            label: "Full Name",
            value: profile.fullName,
        },
        {
            icon: Mail,
            label: "Email",
            value: profile.Email,
        },
        {
            icon: Shield,
            label: "Account Role",
            value: profile.Role,
        },
    ]

    const quickActions = [
        {
            icon: ShoppingBag,
            title: "Browse Shop",
            description: "Explore our latest tech products",
            to: "/shop",
            color: "bg-blue-600",
        },
        {
            icon: Package,
            title: "My Orders",
            description: "Track and manage your purchases",
            to: "/shop",
            color: "bg-slate-800",
        },
        {
            icon: Settings,
            title: "Account Settings",
            description: "Update your profile preferences",
            to: "/contact",
            color: "bg-blue-500",
        },
    ]

    return (
        <main className="min-h-screen w-full bg-gray-50 text-slate-900">
            {/* Hero */}
            <header className="w-full bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                        Your Account
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Dashboard</h1>
                    <p className="mt-4 max-w-xl text-sm text-slate-400">
                        {loading
                            ? "Loading your account details..."
                            : `Welcome back, ${profile.fullName || "there"}. Manage your NovaTech profile below.`}
                    </p>
                </div>
            </header>

            {/* Content */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {loading ? (
                    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 bg-white py-24 shadow-xl">
                        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
                        <p className="text-sm text-gray-500">Fetching your profile...</p>
                    </div>
                ) : (
                    <>
                        {/* Profile overview */}
                        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 sm:px-10">
                                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white/30 bg-white text-2xl font-bold text-blue-600 shadow-lg">
                                        {initials}
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                            {profile.fullName || "NovaTech User"}
                                        </h2>
                                        <p className="mt-1 text-sm text-blue-100">{profile.Email}</p>
                                        {profile.Role && (
                                            <span className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                                                {profile.Role}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 p-6 sm:p-10 md:grid-cols-3">
                                {infoCards.map(({ icon: Icon, label, value }) => (
                                    <div
                                        key={label}
                                        className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:border-blue-200 hover:shadow-md"
                                    >
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                                            <Icon className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                            {label}
                                        </p>
                                        <p className="mt-2 text-lg font-semibold text-slate-900 capitalize">
                                            {value || "—"}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* List Product button for seller */}
                        {profile.Role == 'seller' && (
                            <div className="flex items-center justify-center my-10">
                                <button className='px-5  py-3  bg-blue-600 text-white text-xl rounded-2xl hover:bg-blue-700 transition duration-300 lg:text-2xl lg:px-20 lg:py-5  '>
                                    List Product
                                </button>

                            </div>
                        )}

                        {/* Quick actions */}
                        <div className="mt-10">
                            <h3 className="mb-6 text-lg font-semibold text-slate-900">Quick Actions</h3>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {quickActions.map(({ icon: Icon, title, description, to, color }) => (
                                    <Link
                                        key={title}
                                        to={to}
                                        className="group flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                                    >
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color} text-white transition group-hover:scale-105`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                                                {title}
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">{description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </section>
        </main>
    )
}

export default Dashboard
