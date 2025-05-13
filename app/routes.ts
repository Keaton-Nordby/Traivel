import { type RouteConfig, layout, route } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
    route('sign-in', 'routes/root/sign-in.tsx'),
    layout("routes/admin/admin-layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
    ]),
];

export default routeConfig;
