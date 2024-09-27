import { Link, Outlet, useNavigate } from "react-router-dom";
import { Hero } from "./Hero";
import { ACCEPT, BUY, DELIVER, INVEST } from "../../../routes/routes";
import { useEffect, useState } from "react";

type LinkTitles = {
  buy: string;
  accept: string;
  invest: string;
  deliver: string;
};

export const Home = () => {
  const navigate = useNavigate();

  const [linkTitle, setLinkTitle] = useState<string>("Buy");

  const [className, setClassName] = useState<LinkTitles>({
    buy: "link-title",
    accept: "link-title",
    invest: "link-title",
    deliver: "link-title",
  });

  useEffect(() => navigate(BUY), [navigate]);

  useEffect(() => {
    const defaultTitles = {
      buy: "link-title",
      accept: "link-title",
      invest: "link-title",
      deliver: "link-title",
    };

    switch (linkTitle) {
      case "Buy":
        setClassName({ ...defaultTitles, buy: "link-title selected-link" });
        return;

      case "Accept":
        setClassName({ ...defaultTitles, accept: "link-title selected-link" });
        return;

      case "Invest":
        setClassName({ ...defaultTitles, invest: "link-title selected-link" });
        return;

      case "Deliver":
        setClassName({ ...defaultTitles, deliver: "link-title selected-link" });
        return;
    }

    console.log(linkTitle);
  }, [linkTitle]);

  return (
    <>
      <Hero />
      <div className="flex">
        <Link to={BUY} onClick={() => setLinkTitle("Buy")} className={className.buy}>
          Buy
        </Link>
        <Link to={ACCEPT} onClick={() => setLinkTitle("Accept")} className={className.accept}>
          Accept
        </Link>
        <Link to={INVEST} onClick={() => setLinkTitle("Invest")} className={className.invest}>
          Invest
        </Link>
        <Link to={DELIVER} onClick={() => setLinkTitle("Deliver")} className={className.deliver}>
          Deliver
        </Link>
      </div>
      <Outlet />
    </>
  );
};
