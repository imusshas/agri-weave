import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import { SIGN_UP } from "../../../routes/routes";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex">
      <div className="flex-col">
        <h1 className="hero-title">
          Revolutionizing <span className="hero-title text-green">Agriculture</span> in Bangladesh
        </h1>
        <h2 className="hero-sub-title">Connecting Farmers with Consumers, Empowering with Technology</h2>
        <Button
          title="Sign Up"
          onButtonClick={() => navigate(SIGN_UP)}
          className="btn btn-primary self-center vertical"
        />
      </div>
      <img src="/hero.jpg" alt="Hero Image" className="hero-image" />
    </section>
  );
};
