import {ChangeEvent, Component} from "react";
import {DataGrid, GridColumns, GridSortModel} from "@mui/x-data-grid";
import {ApiClient, PageData, PageMetaData} from "../../services/api-client";
import {Grid, TextField} from "@mui/material";

interface TableProps {
    baseUrl: string
    columns: GridColumns;
    showSearchBar: boolean;
}

interface TableState<T> {
    loading: boolean;
    sortModel: GridSortModel;
    data: T[];
    pageMeta: PageMetaData;
    search: string
}

export default class TableWithPagination<T> extends Component<TableProps, TableState<T>> {

    private apiClient: ApiClient;

    constructor(props: TableProps) {
        super(props);
        this.apiClient = new ApiClient();
        this.state = {
            loading: true,
            sortModel: [],
            data: [],
            pageMeta: {take: 5, pageCount: 0, page: 0, itemCount: 0},
            search: ''
        };
    }

    /**
     * DataGrid pagination starts from 0.
     * Server side starts from 1.
     *
     * @param page
     * @param perPage
     */
    getNextPageUrl(page: number, perPage: number): string {
        let url = `${this.props.baseUrl}?page=${page + 1}&take=${perPage}`;
        if (this.state.sortModel && this.state.sortModel.length) {
            const orderBy = this.state.sortModel[0];
            if (orderBy.sort) {
                url += `&order=${orderBy.sort.toUpperCase()}&orderBy=${orderBy.field}`;
            }
        }

        if (this.props.showSearchBar && this.state.search && this.state.search.length) {
            url += `&q=${this.state.search}`;
        }
        return url;
    }

    fetchData(page: number = 0, perPage: number = 10): void {
        this.setState({
            loading: true
        });
        this.apiClient.get(this.getNextPageUrl(page, perPage))
            .then(resp => {
                const meta = (resp as PageData<T>).meta;
                this.setState({
                    loading: false,
                    data: (resp as PageData<T>).data,
                    pageMeta: {
                        page: meta.page - 1,
                        pageCount: meta.pageCount,
                        itemCount: meta.itemCount,
                        take: meta.take
                    }
                });
            })
            .catch((err: Error) => {
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
            <Grid container spacing={2}>
                {this.props.showSearchBar &&
                <Grid item xs={12}>
                    <TextField
                        placeholder={"Search user by first name, last name or email"}
                        value={this.state.search}
                        onChange={(event) => this.setSearch(event)}
                    />
                </Grid>
                }
                <Grid item xs={12}>
                    <DataGrid
                        autoHeight
                        disableColumnFilter
                        disableSelectionOnClick
                        loading={this.state.loading}
                        rows={this.state.data}
                        columns={this.props.columns}
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
        );
    }

}
