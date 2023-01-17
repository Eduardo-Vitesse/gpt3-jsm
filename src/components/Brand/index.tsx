import "./styles.css";

import { google, slack, atlassian, dropbox, shopify } from "./ImagesImports";

const Brand = () => {
  return (
    <section className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="DropBox" />
      </div>
      <div>
        <img src={shopify} alt="ShopiFy" />
      </div>
    </section>
  );
};

export default Brand;
