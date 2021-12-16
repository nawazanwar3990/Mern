import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import CategoryList from './categories/CategoryList';
import CategoryCreate from './categories/CategoryCreate';
import ProductList from './products/ProductList';
import ProductCreate from './products/ProductCreate';
import incomeList from './incomes/incomeList';
import IncomeCreate from './incomes/IncomeCreate';
import ExpenseList from './expenses/ExpenseList';
import UserList from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import ExpenseCreate from './expenses/ExpenseCreate';
import RolesLIst from './roles/RolesList';
import RoleCreate from './roles/RoleCreate';
import VendorList from './vendors/VendorList';
import VendorCreate from './vendors/CreateVendor';
import PermissionCreate from './permissions/PermissionCreate';
import PermissionList from './permissions/PermissionList';

const Routes = () => {
    

    return (
        <Router>
            <Switch>
                <Route exact  path="/login" component={Login}></Route>
                <Route  path="/register" component={Register}></Route>
                <Route  path="/categories" component={CategoryList}></Route>
                <Route  path="/category/create" component={CategoryCreate}></Route>
                <Route  path="/products" component={ProductList}></Route>
                <Route  path="/product/create" component={ProductCreate}></Route>
                <Route  path="/Incomes" component={incomeList}></Route>
                <Route  path="/Income/create" component={IncomeCreate}></Route>
                <Route  path="/expenses" component={ExpenseList}></Route>
                <Route  path="/expense/create" component={ExpenseCreate}></Route>

                <Route  path="/users" component={UserList}></Route>
                <Route  path="/user/create" component={UserCreate}></Route>
                <Route  path="/user/:id" component={UserEdit}></Route>

                <Route  path="/roles" component={RolesLIst}></Route>
                <Route  path="/role/create" component={RoleCreate}></Route>
                <Route  path="/permissions" component={PermissionList}></Route>
                <Route  path="/permission/create" component={PermissionCreate}></Route>
                <Route  path="/vendors" component={VendorList}></Route>
                <Route  path="/vendor/create" component={VendorCreate}></Route>
            </Switch>
        </Router>
    )

};

export default Routes;