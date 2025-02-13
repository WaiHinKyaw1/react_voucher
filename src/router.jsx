import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import Layout from "./components/Layout";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductEditPage from "./pages/ProductEditPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        'path' : '/',
        errorElement : <NotFoundPage/>,
        children : [
            {
                path : '/',
                element : <LoginPage/>
            },
            {
                path : '/register',
                element : <RegisterPage/>
            },
            {
                    path: 'dashboard',
                    element : <Layout/>,
                    errorElement :<NotFoundPage/>,
                    children :[
                        {
                            index : true,
                            element : <Dashboard/>
                        },
                        {
                            'path' : 'product',
                            element : <ProductPage/>
                        },
                        {
                            'path' : 'product/create',
                            element : <ProductCreatePage/>
                        },
                        {
                            'path' : 'product/edit/:id',
                            element : <ProductEditPage/>
                        },
                        {
                            path : 'sale',
                            element : <SalePage/>
                        },
                        {
                            path : 'voucher',
                            element : <VoucherPage/>
                        },
                        {
                            path : 'voucher/detail/:id',
                            element : <VoucherDetailPage/>
                        },                       
                    ]
                }
        ]
    }
    
]);
export default router;