import React from "react";
import ImageBlock from "../ReusableBlocks/ImageBlock";
import TextBlock from "../ReusableBlocks/TextBlock";
import downloadAppImg from "../../LocalImages/Download.png";
import qrCode from "../../LocalImages/QR CODE.png";
import googlePlay from "../../LocalImages/google.png";
import appStore from "../../LocalImages/appstore.png";

import "./DownloadAppSection.scss";
const DownloadAppSection = () => {
  return (
    <div className="download-section-wrapper">
      <div className="content-section">
        <TextBlock
          title="Download Our App"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames egestas et aliquam, orci id eget nec. Urna ultricies orci lobortis neque, pretium rhoncus imperdiet faucibus commodo. Eu."
        />
        {/* Qr */}
        <ImageBlock
          altTitle="QR code"
          height={248}
          width={248}
          imageSource={qrCode}
        />
        <span>
          {/*Google play  */}
          <ImageBlock
            altTitle="play store"
            height={57}
            width={258}
            imageSource={googlePlay}
          />
          {/* appstore */}
          <ImageBlock
            altTitle="apple store"
            height={57}
            width={258}
            imageSource={appStore}
          />
        </span>
      </div>
      <ImageBlock
        imageSource={downloadAppImg}
        width={"100%"}
        height={702}
        altTitle="download-app-image"
      />
      <div className="mobile-download-app">
        <h4>Get the Citi977 app</h4>
        <span>Get live order tracking</span>
        <span>Get latest feature update</span>
        <div className="mobile-store-image-wrapper">
          <ImageBlock
            altTitle="play store"
            height={102}
            width={""}
            imageSource={googlePlay}
          />
          {/* appstore */}
          <ImageBlock
            altTitle="apple store"
            height={102}
            width={""}
            imageSource={appStore}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
