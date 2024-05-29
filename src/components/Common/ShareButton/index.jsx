import React, { useState } from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import Button from "../../Common/Button";

const ShareButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleShareClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="share-button-container">
      <Button text={"Share"} outlined={true} onClick={handleShareClick} />
      {showOptions && (
        <div className="share-options">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
