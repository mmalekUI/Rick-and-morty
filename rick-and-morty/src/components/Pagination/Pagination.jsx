import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../features/pagination/paginationSlice";
const SitePagination = ({ pages }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Pagination
        style={{ display: "flex", justifyContent: "center", padding: "30px 0" }}
        count={pages}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => dispatch(setPageNumber(page))}
      />
    </>
  );
};

export default SitePagination;
