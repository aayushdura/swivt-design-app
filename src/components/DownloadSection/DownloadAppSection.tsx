import React from "react";
import ImageBlock from "../ReusableBlocks/ImageBlock";
import TextBlock from "../ReusableBlocks/TextBlock";
import downloadAppImg from "../../Wireframes/Download.png";
import qrCode from "../../Wireframes/QR CODE.png";
import googlePlay from "../../Wireframes/google.png";
import appStore from "../../Wireframes/appstore.png";

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
        width={786}
        height={702}
        altTitle="download-app-image"
      />
    </div>
  );
};

export default DownloadAppSection;
