import {Component} from "react";
import {GridColumns, GridValueFormatterParams} from '@mui/x-data-grid';
import TableWithPagination from "../../components/TableWithPagination";
import {User} from "./user.dto";
import constants from "../../common/constants";

function dateFormatter(params: GridValueFormatterParams): string {
    return new Date(params.getValue(params.id, 'createdAt') as string).toLocaleString();
}

export default class Users extends Component<{}, {}> {

    getTableColumns(): GridColumns {
        return [
            {
                field: 'firstName', headerName: 'First Name', flex: 1, sortable: true
            },
            {
                field: 'lastName', headerName: 'Last Name', flex: 1, sortable: true
            },
            {
                field: 'role', headerName: 'Role', flex: 1, sortable: false
            },
            {
                field: 'email', headerName: 'Email', flex: 1, sortable: true
            },
            {
                field: 'phone', headerName: 'Phone', flex: 1, sortable: true
            },
            {
                field: 'avatar', headerName: 'Avatar', flex: 1, sortable: false
            },
            {
                field: 'createdAt', headerName: 'Created At',
                flex: 1, sortable: true, valueFormatter: dateFormatter
            },
            {
                field: 'updatedAt', headerName: 'Updated At',
                flex: 1, sortable: true, valueFormatter: dateFormatter
            },
        ];
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1}}>
                    <TableWithPagination<User>
                        baseUrl={constants.API_USERS_ENDPOINT}
                        columns={this.getTableColumns()}
                        showSearchBar={true}
                    />
                </div>
            </div>
        );
    }

}
