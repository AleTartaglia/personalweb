import React, { useState } from "react";
import { MainLayout, InnerLayout, PaginationStyled } from "../styles/index";
import Pagination from "@material-ui/lab/Pagination";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

const PortfoliosPage = () => {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button] = useState(allButtons);

  //filter data
  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  //pagination
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(portfolios.length / itemsPerPage));
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const portFolioItems = menuItem.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"portfolio"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu portFolioItems={portFolioItems} />
      </InnerLayout>
      <PaginationStyled>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large"
          defaultPage={1}
        />
      </PaginationStyled>
    </MainLayout>
  );
};

export default PortfoliosPage;
