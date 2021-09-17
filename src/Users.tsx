import {ChangeEvent, Component} from "react";
import {ApiClient, PageData, PageMetaData} from "./ApiClient";
import {DataGrid, GridColumns, GridSortModel} from '@mui/x-data-grid';
import {Grid, TextField} from "@mui/material";

interface UsersState {
    loading: boolean;
    columns: GridColumns;
    sortModel: GridSortModel;
    data: User[];
    pageMeta: PageMetaData;
    search: string
}

export default class Users extends Component<{}, UsersState> {

    private apiClient: ApiClient;

    constructor(props: {}) {
        super(props);
        this.apiClient = new ApiClient();
        this.state = {
            loading: true,
            columns: this.getTableColumns(),
            sortModel: [],
            data: [],
            pageMeta: {take: 5, pageCount: 0, page: 0, itemCount: 0},
            search: ''
        };
    }

    getTableColumns(): GridColumns {
        return [
            {field: 'firstName', headerName: 'First Name', flex: 1, sortable: true},
            {field: 'lastName', headerName: 'Last Name', flex: 1, sortable: true},
            {field: 'role', headerName: 'Role', flex: 1, sortable: false},
            {field: 'email', headerName: 'Email', flex: 1, sortable: true},
            {field: 'phone', headerName: 'Phone', flex: 1, sortable: true},
            {field: 'avatar', headerName: 'Avatar', flex: 1, sortable: false},
            {field: 'createdAt', headerName: 'Created At', flex: 1, sortable: true},
            {field: 'updatedAt', headerName: 'Updated At', flex: 1, sortable: true},
        ];
    }

    baseUrl(): string {
        return "api/users/";
    }

    /**
     * DataGrid pagination starts from 0.
     * Server side starts from 1.
     *
     * @param page
     * @param perPage
     */
    dataUrl(page: number, perPage: number): string {
        let url = `${this.baseUrl()}?page=${page + 1}&take=${perPage}`;
        if (this.state.sortModel && this.state.sortModel.length) {
            const orderBy = this.state.sortModel[0];
            if (orderBy.sort) {
                url += `&order=${orderBy.sort.toUpperCase()}&orderBy=${orderBy.field}`;
            }
        }

        if (this.state.search && this.state.search.length) {
            url += `&q=${this.state.search}`;
        }
        return url;
    }

    fetchData(page: number = 0, perPage: number = 10): void {
        this.setState({
            loading: true
        });
        this.apiClient.get(this.dataUrl(page, perPage))
            .then(resp => {
                const meta = (resp as PageData<User>).meta;
                this.setState({
                    loading: false,
                    data: [...(resp as PageData<User>).data],
                    pageMeta: {
                        page: meta.page - 1,
                        pageCount: meta.pageCount,
                        itemCount: meta.itemCount,
                        take: meta.take
                    }
                });
            })
            .catch(err => {
                this.setState({
                    loading: false
                });
                // todo: show toast message
                console.error(err);
                throw err;
            });
    }

    setPage(newPage: number) {
        this.fetchData(newPage, this.state.pageMeta.take);
    }

    setSortModel(newModel: GridSortModel) {
        this.setState({
            sortModel: newModel
        }, () => this.setPage(0));
    }

    setSearch(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.setState({
            search: event.target.value
        }, () => this.setPage(0));
    }

    componentDidMount() {
        this.setPage(this.state.pageMeta.page);
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={"Search user by first name, last name or email"}
                                value={this.state.search}
                                onChange={(event) => this.setSearch(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DataGrid
                                autoHeight
                                disableColumnFilter
                                disableSelectionOnClick
                                loading={this.state.loading}
                                rows={this.state.data}
                                columns={this.state.columns}
                                // pagination
                                pagination
                                pageSize={this.state.pageMeta.take}
                                page={this.state.pageMeta.page}
                                paginationMode={'server'}
                                rowCount={this.state.pageMeta.itemCount}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                onPageChange={(newPage) => this.setPage(newPage)}
                                // sorting
                                sortingMode={'server'}
                                onSortModelChange={(newModel) => this.setSortModel(newModel)}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

}

interface User {
    id: string;
    firstName: string;
    lastName: string;
    role?: 'USER' | 'ADMIN';
    email: string;
    password?: string;
    phone?: string;
    avatar?: string | null;
    createdAt: string;
    updatedAt: string;
}
