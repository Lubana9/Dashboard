/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import Button from "@components/Button/Button";
import Card from "@components/Card/Card";
import Input from "@components/Input/Input";
import Skeleton from "@components/Skeleton/Skeleton";
import SortBtn from "@components/SortBtn/SortBtn";
import { sortBy } from "@utils/sort";
import "@styles/style.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { SiteData, TestData } from "src/data/types";

import NoResults from "./NoResults";

const Dashboard: React.FC = () => {
  const [items, setItems] = useState<TestData[]>([]);
  const [site, setSite] = useState<SiteData[]>([]);
  const [sort, setSort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const fetchData = () => {
    const TestAPI = "http://localhost:3100/tests";
    const SiteAPI = `http://localhost:3100/sites/`;
    const getTestAPI = axios.get(TestAPI);
    const getSiteAPI = axios.get(SiteAPI);
    setIsLoading(true);
    axios.all([getTestAPI, getSiteAPI]).then(
      axios.spread((...allData) => {
        const allDataTest = allData[0].data;
        const allDataSites = allData[1].data;
        setIsLoading(false);
        setItems(allDataTest);
        setSite(allDataSites);
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchValue = (e: any) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = items.filter((item) => {
        return item.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setItems(results);
    } else {
      setItems(items);
    }

    setSearchItem(keyword);
  };

  const handelSort = (str: string) => {
    setSort(!sort);
    sort ? items.sort(sortBy(str)) : items.sort(sortBy(str)).reverse();
  };

  const handelReset = () => {
    fetchData();
    setSearchItem("");
  };
  return (
    <div>
      <Input
        onChange={searchValue}
        countTest={items.length}
        value={searchItem}
      />
      <SortBtn
        onSortName={() => handelSort("name")}
        onSortType={() => handelSort("type")}
        onSortStatus={() => handelSort("status")}
        onSortSite={() => handelSort("site")}
      />
      {items.length > 1 && items ? (
        items.map((item) => {
          var status = "";
          switch (item.status) {
            case "ONLINE":
              status = "online";
              break;
            case "PAUSED":
              status = "paused";
              break;
            case "STOPPED":
              status = "stopped";
              break;
            default:
              status = "draft";
          }
          var border = "";
          switch (item.siteId) {
            case 1:
              border = "red";
              break;
            case 2:
              border = "light-purple";
              break;
            case 3:
              border = "purple";
              break;
            default:
              border = "green";
          }
          const background = item.status === "DRAFT" ? "gray" : "green";
          return (
            <Card key={item.id} dataTest={item} status={status} border={border}>
              {site
                .filter((url) => url.id === item.siteId)
                .map((site) => (
                  <div key={site.id} className="card__site">
                    {site.id === 2
                      ? site.url.split("").slice(12, 32).join("")
                      : site.url.split("").slice(8, 26).join("")}
                  </div>
                ))}
              {item.status === "DRAFT" ? (
                <Link to={`/Finalize/${item.id}`}>
                  <Button background={background}>Finalize</Button>
                </Link>
              ) : (
                <Link to={`/Results/${item.id}`}>
                  <Button background={background}>Results</Button>
                </Link>
              )}
            </Card>
          );
        })
      ) : isLoading ? (
        <Skeleton />
      ) : (
        <NoResults onReset={handelReset} />
      )}
    </div>
  );
};

export default Dashboard;
