import React from 'react';

const Footer = () => {
  return (
    <footer className="footer_wrap">
      <div className="footer_top_wrap u-grid-tablet">
        <div className="footer_top_image">
          <img
            src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67b5cecf0984d99b23200bce_image.avif"
            alt="Footer image"
            className="footer_top_asset"
          />
        </div>
        <div className="footer_navigation_wrap">
          <div className="footer_navigation_contain">
            <ul className="footer_navigation_contain">
              <li><a href="#">Home</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom_wrap">
        <div className="footer_bottom_text">© 2025 OH Architecture</div>
      </div>
    </footer>
  );
};

export default Footer;
