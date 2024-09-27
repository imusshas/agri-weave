import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { UserForm } from "./UserForm";
import { UserEntity } from "../../../types/types";
import { PICK_UP, REQUEST, SCHEME, SELL } from "../../../routes/routes";
import { useEffect, useState } from "react";

type LinkTitles = {
  sell: string;
  request: string;
  scheme: string;
  pickUp: string;
};

export const Profile = () => {
  const user = useLoaderData() as UserEntity;

  const navigate = useNavigate();

  const [linkTitle, setLinkTitle] = useState<string>("Sell");

  const [className, setClassName] = useState<LinkTitles>({
    sell: "link-title",
    request: "link-title",
    scheme: "link-title",
    pickUp: "link-title",
  });

  useEffect(() => navigate(SELL), [navigate]);

  useEffect(() => {
    const defaultTitles = {
      sell: "link-title",
      request: "link-title",
      scheme: "link-title",
      pickUp: "link-title",
    };

    switch (linkTitle) {
      case "Sell":
        setClassName({ ...defaultTitles, sell: "link-title selected-link" });
        return;

      case "Request":
        setClassName({ ...defaultTitles, request: "link-title selected-link" });
        return;

      case "Scheme":
        setClassName({ ...defaultTitles, scheme: "link-title selected-link" });
        return;

      case "PickUp":
        setClassName({ ...defaultTitles, pickUp: "link-title selected-link" });
        return;
    }

    console.log(linkTitle);
  }, [linkTitle]);

  return (
    <section className="flex-col gap-section" >
      <UserForm user={user} />
      <div className="flex" >
        <Link to={SELL} onClick={() => setLinkTitle("Sell")} className={className.sell} >Sell</Link>
        <Link to={REQUEST} onClick={() => setLinkTitle("Request")} className={className.request} >Request</Link>
        <Link to={SCHEME} onClick={() => setLinkTitle("Scheme")} className={className.scheme} >Scheme</Link>
        <Link to={PICK_UP} onClick={() => setLinkTitle("PickUp")} className={className.pickUp} >Pick Up</Link>
      </div>
      <Outlet />
    </section>
  );
};
