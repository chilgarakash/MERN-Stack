import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { ApiStatus, IUser } from "./User.type";

const UserList = () =>{
    const {list, listStatus } = useAppSelector((state: RootState )=>state.user);
    console.log(list,"list");
    return(
        <div>
            <table style={{width:"100%"}}>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {listStatus === ApiStatus.loading && <tbody> List is Loading</tbody>}
                    {listStatus === ApiStatus.error && <tbody> Error while loading list</tbody>}
                    { listStatus === ApiStatus.ideal && list.map((user:IUser,index:number) => {
                        return(
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button type="button" className="btn btn-info">Action</button></td>
                            </tr>
                        );
                    })}
                </table>
        </div>
    )
}
export default UserList;